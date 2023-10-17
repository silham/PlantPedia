import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse} from "next/server"

export async function POST(req: NextApiRequest, res: NextResponse) {
  const jsonBody = req.body; // get JSON body parameters from the request

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage?key=AIzaSyB7E6ela5BzmhRGnUqapTzw3tlpGM2d_G0",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonBody),
    }
  );

  const data = await response.json();

  return res.json(data);
}
