import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import translationEN from '../public/locales/en/translation.json'
import translationFa from '../public/locales/fa/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFa,
  },
}

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
