import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translateData from "./tranlate.json";
i18n.use(initReactI18next).init({
  resources:translateData,
  lng: 'uz',
  fallbackLng:"uz",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;