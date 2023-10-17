import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonBody = req.body; // get JSON body parameters from the request

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta3/models/chat-bison-001:generateMessage?key=AIzaSyB7E6ela5BzmhRGnUqapTzw3tlpGM2d_G0",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}