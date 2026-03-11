import { createRouter, createWebHistory } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import HomeView from '@/views/HomeView.vue'

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
    }
  ]
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
