import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translateData from "./tranlate.json";
const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
i18n.use(initReactI18next).init({
  resources:translateData,
  lng: savedLanguage,
  fallbackLng:"uz",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;