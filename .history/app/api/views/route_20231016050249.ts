import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const searchParams = new URL(request.url).searchParams;
    const viewId = searchParams.get("id");
    console.log("view api called")
    if(viewId !== null){
        const view = prisma.views.create({
            data:{
                viewId: viewId,
            }
        })
        return NextResponse.json(view);
    }
    return {};
}