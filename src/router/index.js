import { createRouter, createWebHistory } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import HomeView from '@/views/HomeView.vue'
import DownloadsView from '@/views/DownloadsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/cz/'
    },
    {
      path: '/:lang/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:lang/dokumenty-ke-stazeni',
      name: 'downloads-cz',
      component: DownloadsView
    },
    {
      path: '/:lang/documentos-para-descargar',
      name: 'downloads-es',
      component: DownloadsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition
    }

    // If there's a hash (anchor link), scroll to that element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset for fixed header
      }
    }

    // Default: scroll to top
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  const { setLanguage } = useLanguage()
  const lang = to.params.lang

  // Validate language parameter
  if (lang && lang !== 'cz' && lang !== 'es') {
    return next('/cz/')
  }

  // Update language state and HTML lang attribute
  if (lang) {
    setLanguage(lang)
  }

  next()
})

export default router
