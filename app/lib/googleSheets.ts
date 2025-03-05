import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

const auth = new GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const sheets = google.sheets({ version: "v4", auth });

export async function saveToGoogleSheet(data: any) {
    try {
      console.log("⏳ Saving data:", data);
  
      const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
      console.log("📄 Spreadsheet ID:", spreadsheetId);
  
      const range = "Responses!A1:Z"; // Update with actual sheet name
      console.log("📌 Range:", range);
  
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          values: [Object.values(data)],
        },
      });
  
      console.log("✅ Data saved successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("🚨 Google Sheets API Error:", error);
      throw error;
    }
}
  
