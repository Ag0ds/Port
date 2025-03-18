import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  console.log("Middleware detectou a rota:", pathname);

  // Verifica se a rota contém "/Contatos"
  const isContatosPage = pathname.includes("/Contatos") ? "true" : "false";

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-is-contatos", isContatosPage); // Adiciona o booleano como string

  return NextResponse.next({
    headers: requestHeaders,
  });
}

// Garante que o middleware roda em todas as rotas
export const config = {
  matcher: "/:path*",
};
