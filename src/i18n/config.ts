import i18next, { init } from 'i18next'
import { initReactI18next } from 'react-i18next'
import DataFa from './en/translationfa.json'
import DataEn from './en/translationEn.json'
// import { getState } from 'setup/redux/store'
// const language = getState().home.language
// console.log({ language })

const resources = {
  en: {
    translation: DataEn,
  },
  fa: {
    translation: DataFa,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'fa',
  debug: true,
  keySeparator: '.',
})

export default init
