<template>
  <header :class="alignmentClass">
    <h2 class="font-heading font-bold text-[34px] text-navy leading-tight tracking-tighter mb-3">
      {{ title }}
    </h2>

    <p
      v-if="subtitle"
      class="font-body text-[18px] text-navy opacity-80 max-w-[680px]"
      :class="alignmentClass"
    >
      {{ subtitle }}
    </p>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  align: {
    type: String,
    default: 'left'
  }
})

const alignmentClass = computed(() => {
  return props.align === 'center' ? 'text-center mx-auto' : 'text-left'
})
</script>
