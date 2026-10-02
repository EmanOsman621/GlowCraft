import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.part3.json";
import ar from "./locales/ar.part3.json";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
export default i18n;
