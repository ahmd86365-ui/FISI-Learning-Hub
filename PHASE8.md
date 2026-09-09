# Phase 8 — Prüfungsmodus

Implemented at `/exams`, reached from Prüfungsvorbereitung and the mobile menu. Existing exam pages and course data are unchanged.

## Setup and rules

| Preset | Questions | Duration | Available pool |
| --- | --- | --- | --- |
| WISO Prüfungsmix | 10 / 20 / 30 | 20 / 40 / 60 minutes | 260 confirmed-answer questions |
| Lernbereich-Testmix | 10 / 20 | 15 / 30 minutes | 360 automatically assessable existing exercises |

The lesson pool also supports existing topic/module test questions. Currently those tests are empty placeholders, so existing choice and short-text exercises with answer keys supply the pool. No questions or solutions were created or edited.

Questions are drawn without replacement. Each question earns one point or zero; multiple-choice requires the complete answer set, with no partial credit. Text answers use an exact comparison after trimming outer whitespace and ignoring case. Unanswered questions receive zero points. Passing requires at least 50% of all questions correct.

The deadline is fixed at start. Navigation and answer changes are allowed until submission/deadline. The timer continues during backgrounding, refresh, navigation away, and browser closure. On returning to `/exams`, an expired draft locks and submits. A closed browser cannot execute a submission until reopened. This is a client-graded learning simulation, not a tamper-proof exam service.

## Persistence

One active draft is stored per account in this browser's localStorage under `fisi:exam:v1:<user-id>`. Questions, answers, start/deadline, and frozen submission are persisted. Refresh resumes the same questions/answers; question navigation returns to question 1. Use one tab for an active session. Active drafts do not sync across devices. Browser storage removal loses an unsent draft. A storage write failure is shown in the UI.

Manual or timeout submission freezes answers and the submission time before the request. Failed saves retain a locked local result with a retry button; reopening retries automatically. Successful saves remove the local draft and show the persisted result and review. History comes from Supabase and is available on another device after login.

The RPC saves the attempt and answered-question performance in one database transaction. The attempt UUID makes retries idempotent. Answered incorrect questions enter Fehlertraining; unanswered questions affect the exam score but do not count as practice attempts. Existing two-consecutive-correct recovery rules remain intact.

Migration: `supabase/migrations/20260910090000_create_exam_attempts.sql`. Apply after the existing auth and question-performance migrations using your normal Supabase migration process. It creates `exam_attempts`, `exam_attempt_question_results`, ownership RLS, score constraints, and the authenticated `submit_exam_attempt` security-invoker RPC. No service-role key or new secrets are used. This migration has not been applied to a live database by this task.

## Verification

- `npx tsc --noEmit`
- `node scripts/verifyExamSimulation.mjs`
- `npm run build`
- `git diff --check`

The verification script checks pool sizes, unique keys, preset counts, answer grading, context snapshots, performance keys, elapsed time after refresh, and frozen retry/deadline behavior. Live database/RLS and authenticated browser flows require the following manual checks.

## Manual test steps

1. Apply the migration in a test Supabase project with the previous migrations. Log in and open `/exams` from Prüfungsvorbereitung; verify the mobile menu link as well.
2. Start each preset/count. Verify the correct question count and duration, radio/checkbox/text entry, scenarios/reference text, numbered navigation, previous/next, and answer clearing. No answer key should appear during the active session.
3. Answer several questions, refresh, and navigate away/back. Verify unchanged questions and answers, and elapsed wall-clock time rather than a restarted timer.
4. Manually submit, first canceling the confirmation and then accepting. Verify correct/wrong/unanswered totals, pass/fail at the 50% boundary, review text, and links to the original content.
5. Test timeout with a disposable draft: in browser developer tools, change only its localStorage `endAt` to a few seconds in the future and reload. Verify automatic locking/submission without confirmation and no late answer edits. Also test an already-expired draft after closing/reopening the page.
6. Go offline before submitting. Verify the locked local result remains, refresh while offline, reconnect, and retry. Verify one attempt row and one performance increment per answered question despite retries/double clicks.
7. Open `/errors` after a wrong answer. Verify the matching existing question key and the original two-correct recovery rule. Verify unanswered questions did not increment performance.
8. Refresh `/exams` and inspect an older attempt; then log in on another browser/device and verify saved history. Log out and into another account: that account must not see the first account's history or draft.
9. Using two authenticated test accounts, verify account B cannot SELECT account A's rows or INSERT with A's `user_id` in either new table. Attempt a question-result INSERT referencing A's attempt while using B's user ID; it must fail. Verify anonymous SELECT/INSERT/RPC calls fail, and UPDATE/DELETE are denied by RLS.
10. Check 360px mobile and desktop widths, light/dark themes, keyboard navigation, visible focus, wrapping of long questions, and loading/error/empty states. Smoke-test existing lesson, practice, stats, saved-content, and progress pages.

`src/index.css` already had an uncommitted light-background change when this task resumed and was left untouched. `tsconfig.tsbuildinfo` was already modified and is regenerated by the build; retain it locally as generated output, not as a source change. Nothing was committed or pushed.
