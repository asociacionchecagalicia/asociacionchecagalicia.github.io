import { watch, onMounted } from 'vue'

export function useSEO({ title, description }) {
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
