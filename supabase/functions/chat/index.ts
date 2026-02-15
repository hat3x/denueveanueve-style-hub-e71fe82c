import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Eres el asistente virtual de Denueveanueve, una cadena de peluquerías y centros de estética en Madrid con centros en Collado Villalba, Alpedrete y Boadilla del Monte.

Tu trabajo es ayudar a los clientes a:
- Informarse sobre los servicios (corte, coloración, mechas, alisados, barbería, estética)
- Orientar sobre precios aproximados
- Ayudar a elegir el centro más cercano
- Facilitar la reserva de citas (recogiendo nombre, servicio deseado, centro preferido, fecha/hora)
- Resolver dudas sobre horarios (Lun-Sáb 9:00-21:00, domingos cerrado)

Centros:
- Collado Villalba: C/ Real, 25 - Tel: 918 51 XX XX
- Alpedrete: C/ Betanzos, 12 - Tel: 918 57 XX XX  
- Boadilla del Monte: Av. Infante Don Luis, 8 - Tel: 916 33 XX XX

Sé amable, profesional y cercano. Responde siempre en español. Mantén las respuestas concisas. Si el cliente quiere reservar, recoge los datos necesarios y confirma la cita.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas solicitudes. Por favor, inténtalo de nuevo en unos segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Servicio temporalmente no disponible." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Error del servicio de IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Error desconocido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
