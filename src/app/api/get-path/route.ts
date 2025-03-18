import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pathname = searchParams.get("path");

  return new Response(JSON.stringify({ pathname }), {
    headers: { "Content-Type": "application/json" },
  });
}
