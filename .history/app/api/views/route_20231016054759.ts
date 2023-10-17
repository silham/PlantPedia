import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

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
    viewId: string;
  };
}

export async function POST(req: ExtendedNextApiRequest, res: NextApiResponse) {
    const jsonBody = req.body;
    console.log(jsonBody.viewId)
    return NextResponse.json("this is a post request")
}
