import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./settings";

acceptLanguage.languages(languages as unknown as string[]);

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
//   ],
// };

export function i18nMiddleware(req: NextRequest) {
  let lng: string | null | undefined;

  if (req.cookies.has(cookieName)) {
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  }
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language") ?? "");
  }
  if (!lng) {
    lng = fallbackLng;
  }
  const { pathname } = req.nextUrl;
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!pathnameHasLocale && !req.nextUrl.pathname.startsWith("/_next")) {
    req.nextUrl.pathname = `/${lng}${pathname}`;

    return NextResponse.redirect(req.nextUrl);
  }

  const response = NextResponse.next();
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
    }
  }

  return response;
}
