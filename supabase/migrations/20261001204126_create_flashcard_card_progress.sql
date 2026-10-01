create table if not exists public.flashcard_card_progress (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  card_id text not null check (length(card_id) between 1 and 500),
  lesson_id text not null check (length(lesson_id) between 1 and 255),
  subject_id text not null check (length(subject_id) between 1 and 100),
  module_id text not null check (length(module_id) between 1 and 255),
  attempts integer not null default 0 check (attempts >= 0),
  correct_count integer not null default 0 check (correct_count >= 0),
  incorrect_count integer not null default 0 check (incorrect_count >= 0),
  consecutive_correct integer not null default 0 check (consecutive_correct >= 0),
  repetitions integer not null default 0 check (repetitions >= 0),
  interval_days integer not null default 0 check (interval_days between 0 and 120),
  ease_factor numeric(3, 2) not null default 2.40 check (ease_factor between 1.30 and 2.60),
  last_result boolean not null,
  last_reviewed_at timestamptz not null default now(),
  due_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, card_id),
  check (attempts = correct_count + incorrect_count)
);

create index if not exists flashcard_card_progress_user_due_idx
on public.flashcard_card_progress (user_id, due_at);

alter table public.flashcard_card_progress enable row level security;

revoke all on table public.flashcard_card_progress from public, anon, authenticated;
grant select, insert, update on table public.flashcard_card_progress to authenticated;

create policy "Users can read their own flashcard card progress"
on public.flashcard_card_progress for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own flashcard card progress"
on public.flashcard_card_progress for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own flashcard card progress"
on public.flashcard_card_progress for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create or replace function public.record_flashcard_card_review(
  p_card_id text,
  p_lesson_id text,
  p_subject_id text,
  p_module_id text,
  p_correct boolean
)
returns public.flashcard_card_progress
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_now timestamptz := now();
  v_previous public.flashcard_card_progress;
  v_consecutive integer;
  v_repetitions integer;
  v_interval integer;
  v_ease numeric(3, 2);
  v_due timestamptz;
  v_result public.flashcard_card_progress;
begin
  if v_user_id is null then raise exception 'Authentication required'; end if;
  if p_card_id is null or p_lesson_id is null or p_subject_id is null or p_module_id is null or p_correct is null then
    raise exception 'Flashcard review fields are required';
  end if;

  perform pg_catalog.pg_advisory_xact_lock(
    pg_catalog.hashtextextended(v_user_id::text || ':' || p_card_id, 0)
  );

  select * into v_previous
  from public.flashcard_card_progress
  where user_id = v_user_id and card_id = p_card_id
  for update;

  if p_correct then
    v_consecutive := coalesce(v_previous.consecutive_correct, 0) + 1;
    v_repetitions := coalesce(v_previous.repetitions, 0) + 1;
    v_ease := least(2.60, greatest(1.30, coalesce(v_previous.ease_factor, 2.40) + 0.05));
    v_interval := case v_consecutive
      when 1 then 1
      when 2 then 3
      when 3 then 7
      else least(120, greatest(8, round(coalesce(v_previous.interval_days, 0) * v_ease)::integer))
    end;
  else
    v_consecutive := 0;
    v_repetitions := 0;
    v_ease := least(2.60, greatest(1.30, coalesce(v_previous.ease_factor, 2.40) - 0.20));
    v_interval := 1;
  end if;

  v_due := (((timezone('Europe/Berlin', v_now))::date + v_interval) + time '12:00') at time zone 'Europe/Berlin';

  insert into public.flashcard_card_progress (
    user_id, card_id, lesson_id, subject_id, module_id, attempts, correct_count, incorrect_count,
    consecutive_correct, repetitions, interval_days, ease_factor, last_result, last_reviewed_at, due_at
  ) values (
    v_user_id, p_card_id, p_lesson_id, p_subject_id, p_module_id, 1,
    case when p_correct then 1 else 0 end, case when p_correct then 0 else 1 end,
    v_consecutive, v_repetitions, v_interval, v_ease, p_correct, v_now, v_due
  )
  on conflict (user_id, card_id) do update set
    lesson_id = excluded.lesson_id,
    subject_id = excluded.subject_id,
    module_id = excluded.module_id,
    attempts = public.flashcard_card_progress.attempts + 1,
    correct_count = public.flashcard_card_progress.correct_count + case when p_correct then 1 else 0 end,
    incorrect_count = public.flashcard_card_progress.incorrect_count + case when p_correct then 0 else 1 end,
    consecutive_correct = v_consecutive,
    repetitions = v_repetitions,
    interval_days = v_interval,
    ease_factor = v_ease,
    last_result = p_correct,
    last_reviewed_at = v_now,
    due_at = v_due,
    updated_at = v_now
  returning * into v_result;

  return v_result;
end;
$$;

revoke all on function public.record_flashcard_card_review(text, text, text, text, boolean)
from public, anon, authenticated;
grant execute on function public.record_flashcard_card_review(text, text, text, text, boolean)
to authenticated;
