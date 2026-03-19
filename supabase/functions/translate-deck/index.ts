import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { targetLocale, strings } = await req.json() as {
      targetLocale: string;
      strings: Record<string, string>;
    };

    if (!targetLocale || !strings) {
      return new Response(JSON.stringify({ error: "Missing targetLocale or strings" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build compact payload: array of [key, value] pairs
    const entries = Object.entries(strings);
    const inputJson = JSON.stringify(Object.fromEntries(entries));

    const systemPrompt = `You are a professional translator for a music marketing company's pitch deck. Translate ALL values in the provided JSON object from English to ${targetLocale}. 

Rules:
- Keep all JSON keys EXACTLY as-is (do not translate keys)
- Translate only the values
- Keep proper nouns (artist names, platform names like TikTok, Spotify, YouTube, SoundCloud, Instagram, Meta, Facebook) unchanged
- Keep numbers, currencies, percentages, and metric abbreviations (CPM, UGC, etc.) unchanged  
- Keep email addresses and URLs unchanged
- Maintain the same tone: professional, confident, direct
- For music industry jargon, use the most natural equivalent in the target language
- Return ONLY valid JSON with the same structure — no markdown, no explanation`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Translate to ${targetLocale}:\n${inputJson}` },
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);

      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      throw new Error(`AI gateway returned ${response.status}`);
    }

    const aiResult = await response.json();
    let content = aiResult.choices?.[0]?.message?.content ?? "";

    // Strip markdown code fences if present
    content = content.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

    const translated = JSON.parse(content) as Record<string, string>;

    return new Response(JSON.stringify(translated), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("translate-deck error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Translation failed" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
