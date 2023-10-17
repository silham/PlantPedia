import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  searchParams: { q: string };
}

export async function GET(
  request: NextRequest,
  { searchParams: { q } }: Props
) {}
