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
  const jsonBody = await bodyParser.json(req);

  // Type check the request body
  type PostRequestBody = {
    viewId: string;
  };

  const typedJsonBody = jsonBody as PostRequestBody;

  console.log(typedJsonBody.viewId);

  return NextResponse.json('this is a post request');
}
