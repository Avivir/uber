import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enCommon from "../public/locales/en-US/encommon.json";
import plCommon from "../public/locales/pl/plcommon.json";
import decommon from "../public/locales/de/decommon.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      "en-US": {
        common: enCommon,
      },
      pl: {
        common: plCommon,
      },
      de: {
        common: decommon,
      },
    },
    fallbackLng: "en-US",
    debug: true,
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
