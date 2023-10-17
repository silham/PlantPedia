import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'

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

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    viewId?: string;
  };
}

export async function POST(req: ExtendedNextApiRequest, res: NextApiResponse) {
    let jsonBody = {};
    if (req.body instanceof Readable) {
        const chunks = [];
        for await (const chunk of req.body) {
            chunks.push(chunk);
        }
        const body = Buffer.concat(chunks).toString('utf8');
        jsonBody = JSON.parse(body);
    } else {
        jsonBody = req.body;
    }
    console.log(jsonBody)
    return NextResponse.json("this is a post request")
}