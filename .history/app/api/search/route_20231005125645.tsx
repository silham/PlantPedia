import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  searchParams: { q: string };
}

export async function GET(request: NextRequest, { searchParams }: Props) {
  if (searchParams && "q" in searchParams) {
    return searchParams.q;
  } else {
    // Handle the case where searchParams or q is undefined
    // This could be a default value or an error message
    return "No query parameter provided";
  }
}
