

# Email Gate + Weekly Digest

## What We'll Build

1. **Email gate screen** -- A branded glassmorphism page that matches the deck's aesthetic, asking visitors for their email before they can view the proposal. The email is saved to localStorage so returning visitors skip the gate.

2. **Backend (Lovable Cloud)** -- A Supabase database table to store collected emails, plus an edge function that sends a weekly digest of new emails to jared@clouted.com.

---

## Part 1: Email Gate

- Create an `EmailGate` component with the Clouted branding, a glass panel, and a single email input + "View Proposal" button
- Wrap the `DeckViewer` in `Index.tsx` with this gate -- if no email in state/localStorage, show the gate; otherwise show the deck
- Validate email format client-side with zod before submission
- On submit, save to localStorage (for repeat visits) and POST to the Supabase `deck_leads` table

## Part 2: Database

- Create a `deck_leads` table with columns: `id`, `email`, `created_at`, `sent_in_digest` (boolean, default false)
- Enable RLS with an insert-only policy for anonymous users (no read/update/delete from client)

## Part 3: Weekly Digest Edge Function

- Create a `weekly-lead-digest` edge function that:
  - Queries all rows where `sent_in_digest = false`
  - Formats them into a simple HTML email
  - Sends to jared@clouted.com using Supabase's built-in Resend integration (or a simple SMTP call)
  - Marks those rows as `sent_in_digest = true`
- Set up a pg_cron job to call this function once per week (every Monday at 9am)

---

## Technical Details

**New files:**
- `src/components/deck/EmailGate.tsx` -- gate UI component
- `supabase/functions/weekly-lead-digest/index.ts` -- digest edge function

**Modified files:**
- `src/pages/Index.tsx` -- wrap DeckViewer with EmailGate logic

**Database migration:**
- Create `deck_leads` table with RLS policies

**Cron schedule:**
- Weekly cron via pg_cron calling the edge function

