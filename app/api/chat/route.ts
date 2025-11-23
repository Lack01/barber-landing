import { GoogleGenerativeAI } from '@google/generative-ai';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Configurar Google Sheets
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Sistema de prompts para la IA
const SYSTEM_PROMPT = `
Eres un asistente virtual de ${process.env.BARBER_NAME}, una barbería profesional.

Tu trabajo es:
1. Saludar amablemente a los clientes
2. Responder preguntas sobre servicios y precios
3. Ayudar a reservar citas

SERVICIOS Y PRECIOS:
${process.env.BARBER_SERVICES}

HORARIO:
${process.env.BARBER_HOURS}

PROCESO DE RESERVA:
Para reservar una cita necesitas:
- Nombre completo del cliente
- Número de teléfono
- Servicio deseado
- Fecha y hora preferida

Cuando tengas TODA la información, responde en formato JSON:
{
  "action": "book_appointment",
  "data": {
    "nombre": "...",
    "telefono": "...",
    "servicio": "...",
    "fecha": "YYYY-MM-DD",
    "hora": "HH:MM"
  }
}

Si falta información, pregunta de forma amable y natural.
`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    // Inicializar el modelo
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT
    });

    // Crear contexto de conversación
    const chat = model.startChat({
      history: history || [],
    });

    // Enviar mensaje
    const result = await chat.sendMessage(message);
    const response = result.response.text();

    // Verificar si la IA quiere hacer una reserva
    if (response.includes('"action": "book_appointment"')) {
      try {
        const jsonMatch = response.match(/\{[\s\S]*"action":\s*"book_appointment"[\s\S]*\}/);
        if (jsonMatch) {
          const bookingData = JSON.parse(jsonMatch[0]);
          await saveToGoogleSheets(bookingData.data);
          
          return NextResponse.json({
            message: `✅ ¡Cita reservada exitosamente!\n\nDetalles:\n- Nombre: ${bookingData.data.nombre}\n- Servicio: ${bookingData.data.servicio}\n- Fecha: ${bookingData.data.fecha}\n- Hora: ${bookingData.data.hora}\n\nTe esperamos en ${process.env.BARBER_NAME}!`,
            booked: true
          });
        }
      } catch (parseError) {
        console.error('Error parsing booking data:', parseError);
      }
    }

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Error procesando tu mensaje' },
      { status: 500 }
    );
  }
}

async function saveToGoogleSheets(data: any) {
  const values = [[
    new Date().toISOString(),
    data.nombre,
    data.telefono,
    data.servicio,
    `${data.fecha} ${data.hora}`,
    'Pendiente'
  ]];

  /*// Obtener metadatos para listar las pestañas y confirmar el nombre
    const meta = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: 'sheets.properties.title',
    });

    const sheetTitles = (meta.data.sheets || []).map(s => s.properties.title);
    console.log('Pestañas encontradas:', sheetTitles);

    // Usa la primera pestaña encontrada o 'Sheet1' si no hay
    let sheetName = sheetTitles[0] || 'Sheet1';

    // Si el nombre contiene espacios u otros caracteres, ponlo entre comillas simples según A1 notation
    if (sheetName.includes(' ') || /[^A-Za-z0-9_]/.test(sheetName)) {
      // escapar comillas simples internas
      sheetName = `'${sheetName.replace(/'/g, "\\'")}'`;
    }

    const range = `${sheetName}!A:G`;*/


  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Hoja1!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  });
}
