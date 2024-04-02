import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import REGISTER_EN from "../locales/en/register.json";
import REGISTER_VI from "../locales/vi/register.json";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};

export const resources = {
  en: {
    register: REGISTER_EN,
  },
  vi: {
    register: REGISTER_VI,
  },
};

export const defaultNS = "register";

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["register"],
  fallbackLng: "vi",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});
