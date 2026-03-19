import { watch, onMounted, unref } from 'vue'

export function useSEO({ title, description }) {
  const upsertOgMeta = (property, content) => {
    let el = document.querySelector(`meta[property="${property}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('property', property)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  const updateMetaTags = () => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }
      metaDescription.content = description
    }

    // Open Graph tags
    const titleValue = unref(title)
    const descValue = unref(description)

    if (titleValue) upsertOgMeta('og:title', titleValue)
    if (descValue) upsertOgMeta('og:description', descValue)
    upsertOgMeta('og:type', 'website')
    upsertOgMeta('og:url', window.location.href)
    upsertOgMeta('og:image', '/assets/hero background - photo.png')
    upsertOgMeta('og:image:width', '1200')
    upsertOgMeta('og:image:height', '630')
    upsertOgMeta('og:site_name', 'Asociación Cultural Checa de Galicia')
  }

  onMounted(() => {
    updateMetaTags()
  })

  // Watch for reactive changes
  if (title && typeof title === 'object') {
    watch(title, updateMetaTags)
  }
  if (description && typeof description === 'object') {
    watch(description, updateMetaTags)
  }
}
