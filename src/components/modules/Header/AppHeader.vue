<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppLogo from '@/components/global/AppLogo.vue'
import ContainerWrapper from '@/components/layout/ContainerWrapper.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import MobileMenu from './MobileMenu.vue'
import { useLanguage } from '@/composables/useLanguage'

const { t, currentLang } = useLanguage()
const route = useRoute()

const isActive = (czSlug, esSlug) => {
  return route.path === `/${currentLang.value}/${czSlug}` ||
         route.path === `/${currentLang.value}/${esSlug}`
}

const isScrolled = ref(false)
const isMenuOpen = ref(false)

let scrollTimeout = null

const handleScroll = () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }

  scrollTimeout = setTimeout(() => {
    isScrolled.value = window.scrollY > 80
  }, 100)
}

const openMenu = () => {
  isMenuOpen.value = true
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// BUG 2 FIX: Close mobile menu when resizing to desktop
const handleResize = () => {
  if (window.innerWidth >= 1280 && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>

<template>
  <!-- Skip Link -->
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-coral focus:text-white focus:rounded-md"
  >
    {{ t('header.aria.skipToContent') }}
  </a>

  <!-- Header -->
  <header
    id="site-header"
    :class="[
      'fixed top-0 left-0 right-0 z-50 h-[72px]',
      'transition-shadow transition-colors duration-300',
      isScrolled ? 'bg-offwhite shadow-sm' : 'bg-white'
    ]"
  >
    <ContainerWrapper>
      <div class="flex justify-between items-center h-full">
        <!-- Mobile/Tablet: Hamburger (Left) -->
        <button
          class="flex xl:hidden w-11 h-11 items-center justify-center text-navy"
          :aria-label="t('header.aria.openMenu')"
          :aria-expanded="isMenuOpen"
          @click="openMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Desktop: Logo (Left) -->
        <div class="hidden xl:block">
          <AppLogo />
        </div>

        <!-- Mobile/Tablet: Logo (Center) -->
        <div class="xl:hidden">
          <AppLogo />
        </div>

        <!-- Desktop: Navigation (Center) -->
        <nav class="hidden xl:flex items-center gap-space-4">
          <RouterLink
            :to="`/${currentLang}/${currentLang === 'cz' ? 'o-komunite' : 'sobre-la-comunidad'}`"
            class="font-body text-[16px] font-medium text-navy hover:-translate-y-px transition-transform duration-200"
            :class="isActive('o-komunite', 'sobre-la-comunidad') ? 'text-coral underline decoration-coral underline-offset-4 font-semibold' : ''"
          >
            {{ t('header.nav.community') }}
          </RouterLink>
          <RouterLink
            :to="`/${currentLang}/${currentLang === 'cz' ? 'jak-se-potkavame' : 'como-nos-reunimos'}`"
            class="font-body text-[16px] font-medium text-navy hover:-translate-y-px transition-transform duration-200"
            :class="isActive('jak-se-potkavame', 'como-nos-reunimos') ? 'text-coral underline decoration-coral underline-offset-4 font-semibold' : ''"
          >
            {{ t('header.nav.meetings') }}
          </RouterLink>
          <RouterLink
            :to="`/${currentLang}/${currentLang === 'cz' ? 'jak-se-zapojit' : 'como-participar'}`"
            class="font-body text-[16px] font-medium text-navy hover:-translate-y-px transition-transform duration-200"
            :class="isActive('jak-se-zapojit', 'como-participar') ? 'text-coral underline decoration-coral underline-offset-4 font-semibold' : ''"
          >
            {{ t('header.nav.participate') }}
          </RouterLink>
        </nav>

        <!-- Language Switcher (Right) - Desktop only -->
        <div class="hidden xl:flex">
          <LanguageSwitcher />
        </div>
      </div>
    </ContainerWrapper>
  </header>

  <!-- Mobile Menu -->
  <MobileMenu :isOpen="isMenuOpen" @close="closeMenu" />
</template>
