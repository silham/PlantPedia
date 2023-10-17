import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const q = searchParams.get("q");

  if (q) {
    const plantResults = prisma.$queryRaw``;
    return NextResponse.json("");
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
