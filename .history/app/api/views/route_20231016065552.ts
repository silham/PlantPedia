import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import bodyParser from 'body-parser';

export async function GET(request: NextRequest) {
    const searchParams = new URL(request.url).searchParams;
    const viewId = searchParams.get("id");
    console.log("view api called", viewId)
    if(viewId !== null){
        const view = await prisma.views.create({
            data:{
                viewId: viewId,
            }
        })
        return NextResponse.json(view);
    }
    return {};
}

export const config = {
  api: {
    bodyParser: true,
  },
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Parse the request body
  const jsonBody = await new Promise((resolve, reject) => {
    const buffers = [];
    req.on('data', (chunk) => {
      buffers.push(chunk);
    });
    req.on('end', () => {
      const buffer = Buffer.concat(buffers);
      try {
        const json = JSON.parse(buffer.toString());
        resolve(json);
      } catch (error) {
        reject(error);
      }
    });
  });

  console.log(jsonBody);

  return NextResponse.json("this is a post request");
}
