revoke all on table public.flashcard_progress from anon, authenticated;

grant select, insert, update
on table public.flashcard_progress
to authenticated;

revoke all on function public.record_flashcard_result(text, integer, integer)
from public, anon, authenticated;

grant execute
on function public.record_flashcard_result(text, integer, integer)
to authenticated;
