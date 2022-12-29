import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import zhTW from '@/locales/zhTW';
import en from '@/locales/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'zhTW',
    // we init with resources
    resources: {
      en: { translation: en },
      zhTW: { translation: zhTW }
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    // defaultNS: 'index',

    // keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
