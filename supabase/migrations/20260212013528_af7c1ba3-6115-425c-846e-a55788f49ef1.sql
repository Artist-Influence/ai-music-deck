
-- Create deck_leads table for email collection
CREATE TABLE public.deck_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  sent_in_digest BOOLEAN NOT NULL DEFAULT false
);

-- Enable RLS
ALTER TABLE public.deck_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts only (no read/update/delete from client)
CREATE POLICY "Allow anonymous insert"
ON public.deck_leads
FOR INSERT
TO anon
WITH CHECK (true);

-- Enable pg_cron and pg_net extensions for scheduled digest
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
