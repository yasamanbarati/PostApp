import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import translationEN from '../public/locales/en/translation.json'
import translationPN from '../public/locales/pa/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  pn: {
    translation: translationPN,
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
