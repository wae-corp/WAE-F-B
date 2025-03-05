import { NextResponse } from "next/server";
import { saveToGoogleSheet } from "@/app/lib/googleSheets"; // Ensure correct path

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Call the Google Sheets function to store data
    const result = await saveToGoogleSheet(body);

    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    console.error("Error saving data:", error);

    // Ensure error has a message property
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
