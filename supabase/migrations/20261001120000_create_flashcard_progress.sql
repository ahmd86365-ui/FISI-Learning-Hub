create table if not exists public.flashcard_progress (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  lesson_id text not null check (length(lesson_id) between 1 and 255),
  completed_sessions integer not null default 0 check (completed_sessions >= 0),
  best_score integer not null default 0 check (best_score between 0 and 100),
  last_score integer not null default 0 check (last_score between 0 and 100),
  last_total integer not null default 0 check (last_total >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

alter table public.flashcard_progress enable row level security;
revoke all on table public.flashcard_progress from anon;
grant select, insert, update on table public.flashcard_progress to authenticated;

create policy "Users can read their own flashcard progress"
on public.flashcard_progress for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own flashcard progress"
on public.flashcard_progress for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own flashcard progress"
on public.flashcard_progress for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create or replace function public.record_flashcard_result(p_lesson_id text, p_score integer, p_total integer)
returns public.flashcard_progress
language plpgsql
security invoker
set search_path = ''
as $$
declare result public.flashcard_progress;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  insert into public.flashcard_progress (user_id, lesson_id, completed_sessions, best_score, last_score, last_total)
  values (auth.uid(), p_lesson_id, 1, p_score, p_score, p_total)
  on conflict (user_id, lesson_id) do update set
    completed_sessions = public.flashcard_progress.completed_sessions + 1,
    best_score = greatest(public.flashcard_progress.best_score, p_score),
    last_score = p_score,
    last_total = p_total,
    updated_at = now()
  returning * into result;
  return result;
end;
$$;

revoke all on function public.record_flashcard_result(text, integer, integer) from public;
grant execute on function public.record_flashcard_result(text, integer, integer) to authenticated;
