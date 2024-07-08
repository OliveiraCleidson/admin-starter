import { NextRequest } from "next/server";
import { i18nMiddleware } from "./app/i18n/middleware";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req: NextRequest) {
  return i18nMiddleware(req);
}
