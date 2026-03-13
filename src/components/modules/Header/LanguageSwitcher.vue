<script setup>
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const props = defineProps({
  variant: {
    type: String,
    default: 'header', // 'header' or 'mobile-panel'
    validator: (value) => ['header', 'mobile-panel'].includes(value)
  }
})

const { currentLang, setLanguage, t } = useLanguage()

const hoveredLang = ref(null)

const switchLanguage = (lang) => {
  if (lang !== currentLang.value) {
    setLanguage(lang)
  }
}
</script>

<template>
  <div :class="[
    'flex gap-3',
    variant === 'mobile-panel' ? 'flex-col gap-6' : 'items-center'
  ]">
    <!-- Czech Button -->
    <button
      :aria-label="t('header.aria.switchToCzech')"
      :aria-pressed="currentLang === 'cz'"
      :class="[
        'flex items-center transition-all duration-200',
        'min-w-[44px] min-h-[44px] p-2',
        variant === 'mobile-panel' ? 'justify-start gap-3' : 'justify-center',
        currentLang === 'cz'
          ? 'border-b-2 border-coral pb-0.5'
          : 'opacity-60 hover:opacity-100'
      ]"
      @click="switchLanguage('cz')"
      @mouseenter="hoveredLang = 'cz'"
      @mouseleave="hoveredLang = null"
      @focus="hoveredLang = 'cz'"
      @blur="hoveredLang = null"
    >
      <img
        src="/assets/flag-cz.svg"
        alt="Czech flag"
        class="h-6 w-auto"
      >
      <!-- Mobile Panel: Always show text | Desktop Header: Show on hover/focus -->
      <span
        v-if="variant === 'mobile-panel'"
        class="font-body text-[18px] text-navy"
      >
        {{ t('header.lang.czech') }}
      </span>
      <span
        v-else
        :class="[
          'hidden xl:block ml-2 font-heading font-medium text-[14px] text-navy whitespace-nowrap',
          'transition-opacity transition-transform duration-200',
          hoveredLang === 'cz' || currentLang === 'cz'
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-2 absolute invisible'
        ]"
      >
        {{ t('header.lang.czech') }}
      </span>
    </button>

    <!-- Spanish Button -->
    <button
      :aria-label="t('header.aria.switchToSpanish')"
      :aria-pressed="currentLang === 'es'"
      :class="[
        'flex items-center transition-all duration-200',
        'min-w-[44px] min-h-[44px] p-2',
        variant === 'mobile-panel' ? 'justify-start gap-3' : 'justify-center',
        currentLang === 'es'
          ? 'border-b-2 border-coral pb-0.5'
          : 'opacity-60 hover:opacity-100'
      ]"
      @click="switchLanguage('es')"
      @mouseenter="hoveredLang = 'es'"
      @mouseleave="hoveredLang = null"
      @focus="hoveredLang = 'es'"
      @blur="hoveredLang = null"
    >
      <img
        src="/assets/flag-es.svg"
        alt="Spanish flag"
        class="h-6 w-auto"
      >
      <!-- Mobile Panel: Always show text | Desktop Header: Show on hover/focus -->
      <span
        v-if="variant === 'mobile-panel'"
        class="font-body text-[18px] text-navy"
      >
        {{ t('header.lang.spanish') }}
      </span>
      <span
        v-else
        :class="[
          'hidden xl:block ml-2 font-heading font-medium text-[14px] text-navy whitespace-nowrap',
          'transition-opacity transition-transform duration-200',
          hoveredLang === 'es' || currentLang === 'es'
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-2 absolute invisible'
        ]"
      >
        {{ t('header.lang.spanish') }}
      </span>
    </button>
  </div>
</template>
