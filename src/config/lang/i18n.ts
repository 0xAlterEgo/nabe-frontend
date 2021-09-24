import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./translation.en.json";

const resource = {
  en: {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
