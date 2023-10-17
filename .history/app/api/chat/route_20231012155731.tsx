import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const API_KEY = "AIzaSyDxu70dWFswmIZizEtcb5JVszUazI1tYps";
  const url = `https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage?key='${API_KEY}`;
  const requestData = {
    prompt: {
      context: "",
      examples: [],
      messages: [{ content: "hi" }],
    },
    temperature: 0.25,
    top_k: 40,
    top_p: 0.9,
  };

  return NextResponse.json("pod");
}
