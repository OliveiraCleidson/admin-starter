export const defaultNS = "common";
export const fallbackLng = "pt-BR";
export const languages = [fallbackLng, "en"] as const;
export const cookieName = "lang";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
