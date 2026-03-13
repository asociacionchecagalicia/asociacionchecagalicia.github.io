import { ref } from 'vue'
import cz from '../locales/cz.json'
import es from '../locales/es.json'

const locales = { cz, es }
const currentLang = ref(localStorage.getItem('preferred-lang') || 'cz')

// Initialize document.documentElement.lang on module load
document.documentElement.lang = currentLang.value

export function useLanguage() {
  const setLanguage = (lang) => {
    if (!locales[lang]) {
      console.warn(`Language "${lang}" not found. Available: ${Object.keys(locales).join(', ')}`)
      return
    }

    currentLang.value = lang
    localStorage.setItem('preferred-lang', lang)
    document.documentElement.lang = lang
  }

  const toggleLanguage = () => {
    const newLang = currentLang.value === 'cz' ? 'es' : 'cz'
    setLanguage(newLang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let result = locales[currentLang.value]

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        // Key path not found, return the original key
        return key
      }
    }

    return result
  }

  return {
    currentLang,
    setLanguage,
    toggleLanguage,
    t
  }
}
