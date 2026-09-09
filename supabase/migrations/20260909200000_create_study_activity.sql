create table if not exists public.study_activity (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  activity_type text not null check (activity_type in ('lesson_completed')),
  lesson_id text not null check (length(lesson_id) between 1 and 255),
  activity_date date not null default ((now() at time zone 'UTC')::date),
  occurred_at timestamptz not null default now(),
  unique (user_id, activity_type, lesson_id, activity_date)
);

create index if not exists study_activity_user_date_idx
on public.study_activity (user_id, activity_date desc);

alter table public.study_activity enable row level security;

revoke all on table public.study_activity from anon;
grant select, insert on table public.study_activity to authenticated;
grant usage, select on sequence public.study_activity_id_seq to authenticated;

create or replace function public.set_study_activity_timestamp()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.occurred_at = now();
  new.activity_date = (now() at time zone 'UTC')::date;
  return new;
end;
$$;

drop trigger if exists set_study_activity_timestamp on public.study_activity;
create trigger set_study_activity_timestamp
before insert on public.study_activity
for each row execute function public.set_study_activity_timestamp();

drop policy if exists "Users can read their own study activity" on public.study_activity;
drop policy if exists "Users can insert their own study activity" on public.study_activity;

create policy "Users can read their own study activity"
on public.study_activity for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own study activity"
on public.study_activity for insert to authenticated
with check ((select auth.uid()) = user_id);
