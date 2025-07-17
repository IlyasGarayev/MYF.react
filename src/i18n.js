import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      az: {
        translation: require('../public/locales/az.json')
      },
      en: {
        translation: require('../public/locales/en.json')
      },
      ru: {
        translation: require('../public/locales/ru.json')
      }
    }
  });

export default i18n;