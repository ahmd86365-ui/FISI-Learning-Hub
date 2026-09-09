create table if not exists public.exam_attempts (
  id uuid primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  exam_mode text not null check (exam_mode in ('wiso_mixed', 'lesson_tests')),
  exam_label text not null check (length(exam_label) between 1 and 255),
  started_at timestamptz not null,
  submitted_at timestamptz not null default now(),
  duration_seconds integer not null check (duration_seconds > 0),
  used_seconds integer not null check (used_seconds >= 0),
  total_questions integer not null check (total_questions > 0),
  correct_answers integer not null check (correct_answers >= 0),
  incorrect_answers integer not null check (incorrect_answers >= 0),
  unanswered_questions integer not null check (unanswered_questions >= 0),
  percentage integer not null check (percentage between 0 and 100),
  passed boolean not null,
  result_data jsonb not null check (jsonb_typeof(result_data) = 'object'),
  check (correct_answers + incorrect_answers + unanswered_questions = total_questions),
  check (used_seconds <= duration_seconds),
  check (percentage = round(100.0 * correct_answers / total_questions)),
  check (passed = (2 * correct_answers >= total_questions))
);

create index if not exists exam_attempts_user_submitted_idx
on public.exam_attempts (user_id, submitted_at desc);

create table if not exists public.exam_attempt_question_results (
  attempt_id uuid not null references public.exam_attempts (id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  question_key text not null,
  correct boolean not null,
  primary key (attempt_id, question_key)
);

alter table public.exam_attempts enable row level security;
alter table public.exam_attempt_question_results enable row level security;

revoke all on table public.exam_attempts from anon;
revoke all on table public.exam_attempt_question_results from anon;
grant select, insert on table public.exam_attempts to authenticated;
grant select, insert on table public.exam_attempt_question_results to authenticated;

create policy "Users can read their own exam attempts"
on public.exam_attempts for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own exam attempts"
on public.exam_attempts for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can read their own exam question results"
on public.exam_attempt_question_results for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own exam question results"
on public.exam_attempt_question_results for insert to authenticated
with check ((select auth.uid()) = user_id and exists (
  select 1 from public.exam_attempts a
  where a.id = attempt_id and a.user_id = (select auth.uid())
));

create or replace function public.submit_exam_attempt(
  p_id uuid,
  p_exam_mode text,
  p_exam_label text,
  p_started_at timestamptz,
  p_duration_seconds integer,
  p_used_seconds integer,
  p_total_questions integer,
  p_correct_answers integer,
  p_incorrect_answers integer,
  p_unanswered_questions integer,
  p_percentage integer,
  p_passed boolean,
  p_result_data jsonb,
  p_question_results jsonb
)
returns public.exam_attempts
language plpgsql
security invoker
set search_path = ''
as $$
declare
  saved public.exam_attempts;
  item jsonb;
  inserted_key text;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;

  if jsonb_typeof(p_question_results) is distinct from 'array'
    or jsonb_array_length(p_question_results) <> p_total_questions
    or jsonb_array_length(p_result_data->'questions') <> p_total_questions then
    raise exception 'Invalid question snapshot';
  end if;

  insert into public.exam_attempts (
    id, user_id, exam_mode, exam_label, started_at, submitted_at, duration_seconds,
    used_seconds, total_questions, correct_answers, incorrect_answers,
    unanswered_questions, percentage, passed, result_data
  ) values (
    p_id, auth.uid(), p_exam_mode, left(p_exam_label, 255), p_started_at, now(), p_duration_seconds,
    p_used_seconds, p_total_questions, p_correct_answers, p_incorrect_answers,
    p_unanswered_questions, p_percentage, p_passed, p_result_data
  )
  on conflict (id) do nothing
  returning * into saved;

  if saved.id is null then
    select * into saved from public.exam_attempts where id = p_id and user_id = auth.uid();
    if saved.id is null then raise exception 'Attempt is not accessible'; end if;
    return saved;
  end if;

  for item in select value from jsonb_array_elements(coalesce(p_question_results, '[]'::jsonb))
  loop
    if coalesce((item->>'answered')::boolean, false) then
      inserted_key := null;
      insert into public.exam_attempt_question_results (attempt_id, user_id, question_key, correct)
      values (p_id, auth.uid(), item->>'question_key', (item->>'correct')::boolean)
      on conflict do nothing
      returning question_key into inserted_key;

      if inserted_key is not null then
        insert into public.question_performance (
          user_id, question_key, question_id, question_type, source_id, title,
          subject_label, module_label, content_path, question_data, attempts,
          correct_answers, incorrect_answers, consecutive_correct, last_result, last_answered_at
        ) values (
          auth.uid(), item->>'question_key', item->>'question_id', item->>'question_type',
          item->>'source_id', left(item->>'title', 1000), nullif(item->>'subject_label', ''),
          nullif(item->>'module_label', ''), item->>'content_path', item->'question_data', 1,
          case when (item->>'correct')::boolean then 1 else 0 end,
          case when (item->>'correct')::boolean then 0 else 1 end,
          case when (item->>'correct')::boolean then 1 else 0 end,
          (item->>'correct')::boolean, now()
        )
        on conflict (user_id, question_key) do update set
          attempts = public.question_performance.attempts + 1,
          correct_answers = public.question_performance.correct_answers + case when (item->>'correct')::boolean then 1 else 0 end,
          incorrect_answers = public.question_performance.incorrect_answers + case when (item->>'correct')::boolean then 0 else 1 end,
          consecutive_correct = case when (item->>'correct')::boolean then public.question_performance.consecutive_correct + 1 else 0 end,
          last_result = (item->>'correct')::boolean,
          last_answered_at = now();
      end if;
    end if;
  end loop;

  return saved;
end;
$$;

revoke all on function public.submit_exam_attempt(uuid, text, text, timestamptz, integer, integer, integer, integer, integer, integer, integer, boolean, jsonb, jsonb) from public;
grant execute on function public.submit_exam_attempt(uuid, text, text, timestamptz, integer, integer, integer, integer, integer, integer, integer, boolean, jsonb, jsonb) to authenticated;
