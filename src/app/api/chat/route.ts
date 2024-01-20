// Import necessary modules and configurations
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/db";
import { chats } from "@/utils/constanst";

// Connect to the MongoDB database
connectDB();

// Handle GET request to retrieve user data with the provided token
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ data: chats }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
