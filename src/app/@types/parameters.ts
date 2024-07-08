import { languages } from "../i18n/settings";

export type PageParams = {
  lng: (typeof languages)[number];
};
