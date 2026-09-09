create table if not exists public.lesson_progress (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  lesson_id text not null check (length(lesson_id) between 1 and 255),
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;

revoke all on table public.lesson_progress from anon;
grant select, insert, update, delete on table public.lesson_progress to authenticated;

create or replace function public.set_lesson_progress_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_lesson_progress_updated_at on public.lesson_progress;
create trigger set_lesson_progress_updated_at
before update on public.lesson_progress
for each row execute function public.set_lesson_progress_updated_at();

drop policy if exists "Users can read their own lesson progress" on public.lesson_progress;
drop policy if exists "Users can insert their own lesson progress" on public.lesson_progress;
drop policy if exists "Users can update their own lesson progress" on public.lesson_progress;
drop policy if exists "Users can delete their own lesson progress" on public.lesson_progress;

create policy "Users can read their own lesson progress"
on public.lesson_progress for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own lesson progress"
on public.lesson_progress for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own lesson progress"
on public.lesson_progress for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own lesson progress"
on public.lesson_progress for delete to authenticated
using ((select auth.uid()) = user_id);
