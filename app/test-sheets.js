// ...existing code...
const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  try {
    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || !process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.error('Falta GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY o GOOGLE_SHEET_ID en .env.local');
      process.exit(1);
    }

    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
      .replace(/\\n/g, '\n')
      .replace(/\r/g, '');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL.trim(),
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID.trim();

    // Obtener metadatos para listar las pestañas y confirmar el nombre
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

    const range = `${sheetName}!A:G`;

    // Intentar escribir una fila de prueba
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          'Test Cliente',
          '123456789',
          'Test Servicio',
          '2025-10-26',
          '10:00',
          'Prueba'
        ]],
      },
    });

    console.log('✅ ¡Conexión exitosa! Se agregó una fila de prueba en rango', range);
    console.log('📊 Revisa tu Google Sheet:', `https://docs.google.com/spreadsheets/d/${spreadsheetId}`);
  } catch (error) {
    console.error('❌ Error:', error.message || error);
  }
}

testConnection();