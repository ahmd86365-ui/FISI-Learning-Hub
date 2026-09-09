create table if not exists public.user_content_items (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  item_kind text not null check (item_kind in ('favorite', 'review')),
  content_type text not null check (content_type in ('lesson', 'exercise')),
  content_id text not null check (length(content_id) between 1 and 255),
  content_title text not null check (length(content_title) between 1 and 500),
  content_path text not null check (length(content_path) between 1 and 1000 and content_path like '/%'),
  created_at timestamptz not null default now(),
  unique (user_id, item_kind, content_type, content_id)
);

alter table public.user_content_items enable row level security;

revoke all on table public.user_content_items from anon;
grant select, insert, update, delete on table public.user_content_items to authenticated;
grant usage, select on sequence public.user_content_items_id_seq to authenticated;

drop policy if exists "Users can read their own saved items" on public.user_content_items;
drop policy if exists "Users can insert their own saved items" on public.user_content_items;
drop policy if exists "Users can update their own saved items" on public.user_content_items;
drop policy if exists "Users can delete their own saved items" on public.user_content_items;

create policy "Users can read their own saved items"
on public.user_content_items for select to authenticated
using ((select auth.uid()) = user_id);

create policy "Users can insert their own saved items"
on public.user_content_items for insert to authenticated
with check ((select auth.uid()) = user_id);

create policy "Users can update their own saved items"
on public.user_content_items for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "Users can delete their own saved items"
on public.user_content_items for delete to authenticated
using ((select auth.uid()) = user_id);
