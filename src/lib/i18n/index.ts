import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('bakarydev-locale') ?? (typeof navigator !== 'undefined' && navigator.language === 'fr-FR' ? 'fr' : 'en'),
  fallbackLocale: 'en',
  fallbackWarn: true,
  missingWarn: true,
  formatFallbackMessages: true,
  silentTranslationWarn: false,
  messages: {
    en,
    fr,
  },
})
