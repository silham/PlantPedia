import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";



export async function GET(request: NextRequest) {
    const searchParams = new URL(request.url).searchParams;
  const id = searchParams.get("id");
  
}
