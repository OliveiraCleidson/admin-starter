import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

async function initI18next(lng?: string, ns?: string) {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
}

/**
 * Hook to use i18next translation function
 * the options.keyPrefix can be used as scope of translation
 * in one structure like "page.component.text"
 *
 * eg:
 * loginPage.buttons.signIn
 */
export async function useTranslation({
  lng,
  ns,
  options,
}: {
  lng: string;
  ns?: string;
  options?: {
    keyPrefix?: string;
  };
}) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
