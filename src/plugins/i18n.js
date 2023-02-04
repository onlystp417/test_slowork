import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import zhTW from '@/locales/zhTW';
import en from '@/locales/en';
import th from '@/locales/th';
import bu from '@/locales/bu';
// import en from '@/locales/bu';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zhTW',
    // we init with resources
    resources: {
      en: { translation: en },
      zhTW: { translation: zhTW },
      th: { translation: th },
      bu: { translation: bu }
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
