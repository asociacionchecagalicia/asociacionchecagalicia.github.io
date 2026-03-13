<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { currentLang } = useLanguage()
</script>

<template>
  <RouterLink :to="'/' + currentLang">
    <!-- Mobile: below 768px, height 36px -->
    <img
      src="/assets/logo-icon.svg"
      alt="Asociación Cultural Checa de Galicia"
      class="block md:hidden h-9 w-auto"
    >

    <!-- Tablet & Desktop: 768px and above, height 44px -->
    <img
      src="/assets/logo-horizontal.svg"
      alt="Asociación Cultural Checa de Galicia"
      class="hidden md:block h-11 w-auto"
    >
  </RouterLink>
</template>
