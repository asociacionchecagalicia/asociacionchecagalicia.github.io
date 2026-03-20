<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const lang = localStorage.getItem('preferred-lang') || 'cz'

const content = {
  cz: {
    title: '404 — Stránka se ztratila v Galicii',
    heading: '404',
    subheading: 'Stránka se ztratila v Galicii',
    body: 'Nepodařilo se nám najít to, co hledáš. Možná je to ztracený poklad.',
    cta: 'Zpět na hlavní stránku'
  },
  es: {
    title: '404 — La página se perdió en Galicia',
    heading: '404',
    subheading: 'La página se perdió en Galicia',
    body: 'No hemos podido encontrar lo que buscas. Quizás es un tesoro perdido.',
    cta: 'Volver al inicio'
  }
}

const c = computed(() => content[lang] || content.cz)

onMounted(() => {
  document.title = c.value.title
})
</script>

<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center bg-offwhite overflow-hidden px-6 text-center">
    <!-- Circle motifs -->
    <div class="absolute pointer-events-none bg-coral w-[300px] h-[300px] rounded-full opacity-[0.08] top-[-80px] right-[-60px]" />
    <div class="absolute pointer-events-none bg-sky w-[220px] h-[220px] rounded-full opacity-[0.07] top-[-20px] right-[100px]" />
    <div class="absolute pointer-events-none bg-sky w-[260px] h-[260px] rounded-full opacity-[0.06] bottom-[-80px] left-[-60px]" />
    <div class="absolute pointer-events-none bg-coral w-[180px] h-[180px] rounded-full opacity-[0.07] bottom-[-30px] left-[80px]" />

    <!-- Content -->
    <div class="relative z-10">
      <p
        class="font-heading font-bold text-[120px] md:text-[160px] leading-none text-transparent"
        style="-webkit-text-stroke: 2px #001F3F"
      >
        {{ c.heading }}
      </p>
      <h1 class="font-heading font-bold text-[28px] md:text-[36px] text-navy leading-tight tracking-tighter mt-4 mb-4">
        {{ c.subheading }}
      </h1>
      <p class="font-body text-[16px] text-navy opacity-70 leading-relaxed mb-8 max-w-[480px] mx-auto">
        {{ c.body }}
      </p>
      <RouterLink
        to="/"
        class="bg-coral text-white font-heading font-semibold text-[16px] px-8 py-4 rounded-xl inline-flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
      >
        {{ c.cta }}
      </RouterLink>
    </div>
  </div>
</template>
