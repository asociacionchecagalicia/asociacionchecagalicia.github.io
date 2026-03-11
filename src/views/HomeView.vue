<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { locale, $t } = useLanguage()
</script>

<template>
  <div class="min-h-screen bg-offwhite">
    <main class="max-w-site mx-auto px-space-3 py-space-6">
      <h1 class="font-heading text-h1 text-navy mb-space-3">
        Asociación Cultural Checa de Galicia
      </h1>
      <p class="font-body text-body text-navy mb-space-2">
        Current language: {{ locale }}
      </p>
      <nav class="space-x-space-2">
        <RouterLink to="/cz/" class="text-navy underline">Česky</RouterLink>
        <RouterLink to="/es/" class="text-navy underline">Español</RouterLink>
      </nav>
    </main>
  </div>
</template>
