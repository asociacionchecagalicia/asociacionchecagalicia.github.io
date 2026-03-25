<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const { t, currentLang } = useLanguage()
const closeBtn = ref(null)
const panelRef = ref(null)

const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

const handleTab = (e) => {
  if (!props.isOpen || e.key !== 'Tab') return

  if (!panelRef.value) return

  const focusableElements = panelRef.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (e.shiftKey) {
    // Shift + Tab: moving backwards
    if (document.activeElement === firstElement) {
      e.preventDefault()
      lastElement.focus()
    }
  } else {
    // Tab: moving forwards
    if (document.activeElement === lastElement) {
      e.preventDefault()
      firstElement.focus()
    }
  }
}

const handleOverlayClick = () => {
  emit('close')
}

// Focus management
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden'

    // Move focus to close button
    nextTick(() => {
      if (closeBtn.value) {
        closeBtn.value.focus()
      }
    })
  } else {
    // Restore body scroll
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('keydown', handleTab)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('keydown', handleTab)
  document.body.style.overflow = ''
})
</script>

<template>
  <!-- Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-[39]"
      @click="handleOverlayClick"
    />
  </Transition>

  <!-- Panel -->
  <aside
    ref="panelRef"
    :class="[
      'fixed left-0 top-0 h-full w-[280px] bg-white z-40',
      'transition-transform duration-300 ease-in-out',
      'flex flex-col',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <!-- Close Button -->
    <div class="flex justify-end p-4">
      <button
        ref="closeBtn"
        :aria-label="t('header.aria.closeMenu')"
        class="flex items-center justify-center min-w-[44px] min-h-[44px] text-navy"
        @click="emit('close')"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 flex flex-col">
      <RouterLink
        :to="`/${currentLang}/${currentLang === 'cz' ? 'o-komunite' : 'sobre-la-comunidad'}`"
        class="w-full min-h-[44px] py-3 px-6 font-body text-[18px] text-navy border-b border-[rgba(0,31,63,0.1)]"
        @click="emit('close')"
      >
        {{ t('header.nav.community') }}
      </RouterLink>
      <RouterLink
        :to="`/${currentLang}/${currentLang === 'cz' ? 'jak-se-potkavame' : 'como-nos-reunimos'}`"
        class="w-full min-h-[44px] py-3 px-6 font-body text-[18px] text-navy border-b border-[rgba(0,31,63,0.1)]"
        @click="emit('close')"
      >
        {{ t('header.nav.meetings') }}
      </RouterLink>
      <RouterLink
        :to="`/${currentLang}/${currentLang === 'cz' ? 'jak-se-zapojit' : 'como-participar'}`"
        class="w-full min-h-[44px] py-3 px-6 font-body text-[18px] text-navy border-b border-[rgba(0,31,63,0.1)]"
        @click="emit('close')"
      >
        {{ t('header.nav.participate') }}
      </RouterLink>
    </nav>
  </aside>
</template>
