import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  searchParams: { q: string };
}

export async function GET(request: NextRequest, { searchParams }: Props) {
  if (searchParams && "q" in searchParams) {
    return NextResponse.json(searchParams.q);
  } else {
    return NextResponse.json("No query parameter provided");
  }
}
