import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Manejo de CORS (Seguridad)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { record } = await req.json()
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "O'Creamy <promociones@ocreamy.com.pe>",
        to: [record.email],
        subject: "¡Aquí tienes tu cupón O'Creamy! 🍦",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 20px;">
            <div style="text-align: center;">
               <img src="https://res.cloudinary.com/dw1eowmmp/image/upload/v1762620585/LOGO_IMAGE_pwhxed.png" width="150" alt="O'Creamy Logo">
            </div>
            <h1 style="color: #e11d48; text-align: center;">¡Hola ${record.full_name.split(' ')[0]}!</h1>
            <p style="font-size: 16px; color: #333; text-align: center;">
              Gracias por registrarte en nuestra feria. Estamos muy felices de tenerte con nosotros.
            </p>
            <div style="background-color: #fff5f5; border: 2px dashed #e11d48; padding: 20px; text-align: center; border-radius: 15px; margin: 20px 0;">
              <p style="margin: 0; color: #666; text-transform: uppercase; letter-spacing: 2px; font-size: 12px;">Tu Código de Descuento</p>
              <h2 style="margin: 10px 0; font-size: 40px; color: #e11d48; letter-spacing: 5px;">${record.coupon_code}</h2>
              <p style="margin: 0; color: #836140; font-weight: bold;">¡20% de Descuento en Obleas Especiales!</p>
            </div>
            <p style="font-size: 14px; color: #666; text-align: center;">
              Muestra este código o este correo en nuestra caja en Mall Aventura Santa Anita para canjearlo.
            </p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="text-align: center; color: #999; font-size: 12px;">
              Hacemos obleas y fresas con crema que roban corazones 💖
            </p>
          </div>
        `,
      }),
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200 
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500 
    })
  }
})
