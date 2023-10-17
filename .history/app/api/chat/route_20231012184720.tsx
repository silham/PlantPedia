import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonBody = req.body; // get JSON body parameters from the request

  const response = await fetch("https://actual-api-endpoint.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonBody),
  });

  const data = await response.json();

  res.status(200).json(data);
}
