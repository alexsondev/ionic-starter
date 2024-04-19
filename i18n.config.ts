import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'

export default defineI18nConfig(() => ({
  globalInjection: true,
  legacy: false,
  runtimeOnly: false,
  locale: 'en',
  messages: {
    en,
    pt,
    es,
  },
}))
