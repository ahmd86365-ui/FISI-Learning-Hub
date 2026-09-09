create table if not exists public.question_performance (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  question_key text not null check (length(question_key) between 1 and 500),
  question_id text not null check (length(question_id) between 1 and 255),
  question_type text not null check (question_type in ('lesson_exercise', 'lesson_test', 'ap_exam', 'wiso_exam')),
  source_id text not null check (length(source_id) between 1 and 255),
  title text not null check (length(title) between 1 and 1000),
  subject_label text check (subject_label is null or length(subject_label) <= 255),
  module_label text check (module_label is null or length(module_label) <= 255),
  content_path text not null check (length(content_path) between 1 and 1000 and content_path like '/%'),
  question_data jsonb not null default '{}'::jsonb check (jsonb_typeof(question_data) = 'object'),
  attempts integer not null default 0 check (attempts >= 0),
  correct_answers integer not null default 0 check (correct_answers >= 0),
  incorrect_answers integer not null default 0 check (incorrect_answers >= 0),
  consecutive_correct integer not null default 0 check (consecutive_correct >= 0),
  last_result boolean not null default false,
  last_answered_at timestamptz not null default now(),
  primary key (user_id, question_key),
  check (attempts = correct_answers + incorrect_answers)
);

create index if not exists question_performance_active_errors_idx
on public.question_performance (user_id, incorrect_answers desc, last_answered_at desc)
where incorrect_answers > 0 and consecutive_correct < 2;

alter table public.question_performance enable row level security;

revoke all on table public.question_performance from anon;
grant select, insert, update on table public.question_performance to authenticated;

drop policy if exists "Users can read their own question performance" on public.question_performance;
drop policy if exists "Users can insert their own question performance" on public.question_performance;
drop policy if exists "Users can update their own question performance" on public.question_performance;

create policy "Users can read their own question performance"
on public.question_performance for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own question performance"
on public.question_performance for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own question performance"
on public.question_performance for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create or replace function public.record_question_attempt(
  p_question_key text,
  p_question_id text,
  p_question_type text,
  p_source_id text,
  p_title text,
  p_subject_label text,
  p_module_label text,
  p_content_path text,
  p_question_data jsonb,
  p_correct boolean
)
returns public.question_performance
language plpgsql
security invoker
set search_path = ''
as $$
declare
  result public.question_performance;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  insert into public.question_performance (
    user_id, question_key, question_id, question_type, source_id, title,
    subject_label, module_label, content_path, question_data, attempts,
    correct_answers, incorrect_answers, consecutive_correct, last_result, last_answered_at
  ) values (
    auth.uid(), p_question_key, p_question_id, p_question_type, p_source_id, left(p_title, 1000),
    nullif(left(coalesce(p_subject_label, ''), 255), ''),
    nullif(left(coalesce(p_module_label, ''), 255), ''),
    left(p_content_path, 1000), coalesce(p_question_data, '{}'::jsonb), 1,
    case when p_correct then 1 else 0 end,
    case when p_correct then 0 else 1 end,
    case when p_correct then 1 else 0 end,
    p_correct, now()
  )
  on conflict (user_id, question_key) do update set
    question_id = excluded.question_id,
    question_type = excluded.question_type,
    source_id = excluded.source_id,
    title = excluded.title,
    subject_label = excluded.subject_label,
    module_label = excluded.module_label,
    content_path = excluded.content_path,
    question_data = excluded.question_data,
    attempts = public.question_performance.attempts + 1,
    correct_answers = public.question_performance.correct_answers + case when p_correct then 1 else 0 end,
    incorrect_answers = public.question_performance.incorrect_answers + case when p_correct then 0 else 1 end,
    consecutive_correct = case when p_correct then public.question_performance.consecutive_correct + 1 else 0 end,
    last_result = p_correct,
    last_answered_at = now()
  returning * into result;

  return result;
end;
$$;

revoke all on function public.record_question_attempt(text, text, text, text, text, text, text, text, jsonb, boolean) from public;
grant execute on function public.record_question_attempt(text, text, text, text, text, text, text, text, jsonb, boolean) to authenticated;
