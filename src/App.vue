<template>
  <AppHeader />
  <main id="main-content" class="pt-[72px]">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/modules/Header/AppHeader.vue'
</script>
