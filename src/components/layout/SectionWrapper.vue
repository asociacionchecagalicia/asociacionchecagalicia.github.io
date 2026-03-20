<template>
  <section
    :id="id"
    :style="{ backgroundColor: background }"
    class="pt-16 pb-16 overflow-hidden"
  >
    <slot />
  </section>
</template>

<script setup>
defineProps({
  background: {
    type: String,
    default: '#F9F9F9'
  },
  id: String
})
</script>
