import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const API_KEY = 
    const url = `https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage?key='${API_KEY}`
  return NextResponse.json("pod");
}
