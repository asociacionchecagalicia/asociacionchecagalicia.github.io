import { ref, computed } from 'vue'
import czLocale from '@/locales/cz.json'
import esLocale from '@/locales/es.json'

const locales = {
  cz: czLocale,
  es: esLocale
}

const currentLang = ref('cz')

export function useLanguage() {
  const setLanguage = (lang) => {
    if (lang !== 'cz' && lang !== 'es') {
      lang = 'cz'
    }
    currentLang.value = lang
    localStorage.setItem('preferredLanguage', lang)
    document.documentElement.lang = lang
  }

  const getStoredLanguage = () => {
    return localStorage.getItem('preferredLanguage') || 'cz'
  }

  const $t = (key) => {
    const keys = key.split('.')
    let value = locales[currentLang.value]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }

    return value || key
  }

  const locale = computed(() => currentLang.value)

  return {
    locale,
    setLanguage,
    getStoredLanguage,
    $t
  }
}
