<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'
import { useSEO } from '@/composables/useSEO.js'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import ContainerWrapper from '@/components/layout/ContainerWrapper.vue'

const { t, currentLang } = useLanguage()

// SEO
useSEO({
  title: computed(() => t('meetings.seo.title')),
  description: computed(() => t('meetings.seo.description'))
})

// Touch device detection
const isTouchDevice = ref(false)
const isMobile = ref(false)
onMounted(() => {
  isTouchDevice.value = window.matchMedia('(hover: none)').matches
  isMobile.value = window.innerWidth < 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

// Flip card state
const flipped = ref([false, false, false])

const toggleCard = (index) => {
  flipped.value[index] = !flipped.value[index]
}

const handleMouseEnter = (index) => {
  if (!isTouchDevice.value) {
    flipped.value[index] = true
  }
}

const handleMouseLeave = (index) => {
  if (!isTouchDevice.value) {
    flipped.value[index] = false
  }
}

// Card data
const cards = computed(() => [
  {
    image: 'Events_for_kids_card - photo.jpg',
    altKey: 'meetings.activities.card1.imageAlt',
    titleKey: 'meetings.activities.card1.title',
    bodyKey: 'meetings.activities.card1.body',
    lists: ['list1', 'list2', 'list3', 'list4'].map(
      k => 'meetings.activities.card1.' + k
    ),
    outroKey: 'meetings.activities.card1.outro'
  },
  {
    image: 'About events_for adults_photo.jpg',
    altKey: 'meetings.activities.card2.imageAlt',
    titleKey: 'meetings.activities.card2.title',
    bodyKey: 'meetings.activities.card2.body',
    lists: ['list1', 'list2', 'list3'].map(
      k => 'meetings.activities.card2.' + k
    ),
    outroKey: 'meetings.activities.card2.outro'
  },
  {
    image: 'About events_community_flag - photo.png',
    altKey: 'meetings.activities.card3.imageAlt',
    titleKey: 'meetings.activities.card3.title',
    bodyKey: 'meetings.activities.card3.body',
    lists: ['list1', 'list2', 'list3'].map(
      k => 'meetings.activities.card3.' + k
    ),
    outroKey: 'meetings.activities.card3.outro'
  }
])
</script>

<template>
  <!-- SECTION 1: HERO -->
  <div class="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
    <!-- Background Image -->
    <img
      src="/assets/About events header_calendar_photo.png"
      :alt="t('meetings.hero.imageAlt')"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />

    <!-- Sky Overlay -->
    <div class="absolute inset-0 bg-[#5FA8D3] opacity-60"></div>

    <!-- Content Layer -->
    <div class="relative z-10 pt-32 pb-16">
      <ContainerWrapper>
        <h1
          class="font-heading font-bold text-[40px] md:text-[52px] text-navy leading-tight tracking-tighter max-w-[640px]"
          style="filter: drop-shadow(0 2px 8px rgba(255,255,255,0.4))"
        >
          {{ t('meetings.hero.headline') }}
        </h1>
      </ContainerWrapper>
    </div>

    <!-- Circle Motifs -->
    <div class="absolute top-[-50px] right-[-30px] w-[200px] h-[200px] rounded-full bg-coral opacity-[0.07] pointer-events-none"></div>
    <div class="absolute top-[20px] right-[80px] w-[140px] h-[140px] rounded-full bg-sky opacity-[0.07] pointer-events-none"></div>
  </div>

  <!-- SECTION 2: ACTIVITIES — FLIP CARDS -->
  <SectionWrapper background="white">
    <ContainerWrapper>
      <!-- Section Heading -->
      <h2 class="font-heading font-bold text-[32px] text-navy text-center mb-10">
        {{ t('meetings.activities.heading') }}
      </h2>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="i"
        >
          <!-- DESKTOP: Flip card -->
          <div
            v-if="!isMobile"
            class="cursor-pointer h-[340px]"
            style="perspective: 1000px"
            @click="toggleCard(i)"
            @mouseenter="handleMouseEnter(i)"
            @mouseleave="handleMouseLeave(i)"
          >
            <!-- Card Inner -->
            <div
              class="relative w-full h-full transition-transform duration-600 ease-in-out"
              style="transform-style: preserve-3d"
              :style="{ transform: flipped[i] ? 'rotateY(180deg)' : 'rotateY(0deg)' }"
            >
              <!-- CARD FRONT -->
              <div
                class="absolute inset-0 bg-coral rounded-xl overflow-hidden"
                style="backface-visibility: hidden"
              >
                <!-- Photo (top 55%) -->
                <img
                  :src="'/assets/' + card.image"
                  :alt="t(card.altKey)"
                  class="w-full h-[55%] object-cover"
                  loading="lazy"
                />

                <!-- Text (bottom 45%) -->
                <div class="p-4">
                  <h3 class="font-heading font-semibold text-[18px] text-white mb-2">
                    {{ t(card.titleKey) }}
                  </h3>

                  <!-- Flip hint (touch only) -->
                  <span
                    v-if="isTouchDevice"
                    class="text-[11px] text-white opacity-55 flex items-center gap-1 mt-2"
                  >
                    ↻ {{ t('meetings.activities.flipHint') }}
                  </span>
                </div>
              </div>

              <!-- CARD BACK -->
              <div
                class="absolute inset-0 bg-[#EEF6FB] border border-sky rounded-xl p-4 overflow-y-auto"
                style="backface-visibility: hidden; transform: rotateY(180deg)"
              >
                <!-- Title -->
                <h3 class="font-heading font-semibold text-[14px] text-navy mb-2 pb-2 border-b border-[rgba(95,168,211,0.3)]">
                  {{ t(card.titleKey) }}
                </h3>

                <!-- Body Text -->
                <p class="font-body text-[12px] text-navy opacity-80 leading-relaxed mb-3">
                  {{ t(card.bodyKey) }}
                </p>

                <!-- List -->
                <ul class="space-y-2 mb-3">
                  <li
                    v-for="(listKey, idx) in card.lists"
                    :key="idx"
                    class="flex items-start gap-2 text-[12px] text-navy opacity-80"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0"></span>
                    <span>{{ t(listKey) }}</span>
                  </li>
                </ul>

                <!-- Outro -->
                <p class="font-body text-[11px] text-navy opacity-60 italic mt-3">
                  {{ t(card.outroKey) }}
                </p>

                <!-- Flip back hint -->
                <span class="text-[10px] text-sky mt-auto block text-right">
                  {{ t('meetings.activities.flipBack') }}
                </span>
              </div>
            </div>
          </div>

          <!-- MOBILE: Stacked layout -->
          <div v-else class="rounded-xl overflow-hidden">
            <!-- Top: image -->
            <img
              :src="'/assets/' + card.image"
              :alt="t(card.altKey)"
              class="w-full h-[200px] object-cover rounded-t-xl"
              loading="lazy"
            />

            <!-- Middle: coral title bar -->
            <div class="bg-coral p-4">
              <h3 class="font-heading font-semibold text-[18px] text-white">
                {{ t(card.titleKey) }}
              </h3>
            </div>

            <!-- Bottom: content -->
            <div class="bg-[#EEF6FB] rounded-b-xl p-4">
              <p class="font-body text-[12px] text-navy opacity-80 leading-relaxed mb-3">
                {{ t(card.bodyKey) }}
              </p>

              <ul class="space-y-2 mb-3">
                <li
                  v-for="(listKey, idx) in card.lists"
                  :key="idx"
                  class="flex items-start gap-2 text-[12px] text-navy opacity-80"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0"></span>
                  <span>{{ t(listKey) }}</span>
                </li>
              </ul>

              <p class="font-body text-[11px] text-navy opacity-60 italic mt-3">
                {{ t(card.outroKey) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  </SectionWrapper>

  <!-- SECTION 3: IDEAS -->
  <SectionWrapper background="offwhite">
    <div class="relative">
      <ContainerWrapper>
        <!-- Section Heading Row -->
        <div class="flex items-center gap-4 mb-6">
          <!-- Events Icon -->
          <img
            src="/assets/Events_icon.svg"
            :alt="t('meetings.ideas.iconAlt')"
            class="w-[52px] h-[52px] flex-shrink-0"
            loading="lazy"
          />

          <!-- Heading -->
          <h2 class="font-heading font-bold text-[32px] text-navy leading-tight">
            {{ t('meetings.ideas.heading') }}
          </h2>
        </div>

        <!-- Body Paragraphs -->
        <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-4 max-w-[720px]">
          {{ t('meetings.ideas.p1') }}
        </p>

        <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-4 max-w-[720px]">
          {{ t('meetings.ideas.p2') }}
        </p>

        <!-- Subheading (coral) -->
        <h3 class="font-heading font-semibold text-[20px] text-coral mt-8 mb-3">
          {{ t('meetings.ideas.subheading') }}
        </h3>

        <!-- Intro Paragraph -->
        <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-6">
          {{ t('meetings.ideas.intro') }}
        </p>

        <!-- Benefits Heading -->
        <h3 class="font-heading font-semibold text-[16px] text-navy mb-3">
          {{ t('meetings.ideas.benefitsHeading') }}
        </h3>

        <!-- Benefits List -->
        <ul class="mb-6">
          <li class="flex items-start gap-3 py-3 border-b border-[rgba(0,31,63,0.08)] last:border-b-0">
            <span class="w-2 h-2 rounded-full bg-coral flex-shrink-0 mt-2"></span>
            <div>
              <span class="font-heading font-semibold text-[15px] text-navy">
                {{ t('meetings.ideas.benefit1Title') }}
              </span>
              <span class="font-body text-[15px] text-navy opacity-70">
                — {{ t('meetings.ideas.benefit1Body') }}
              </span>
            </div>
          </li>

          <li class="flex items-start gap-3 py-3 border-b border-[rgba(0,31,63,0.08)] last:border-b-0">
            <span class="w-2 h-2 rounded-full bg-coral flex-shrink-0 mt-2"></span>
            <div>
              <span class="font-heading font-semibold text-[15px] text-navy">
                {{ t('meetings.ideas.benefit2Title') }}
              </span>
              <span class="font-body text-[15px] text-navy opacity-70">
                — {{ t('meetings.ideas.benefit2Body') }}
              </span>
            </div>
          </li>

          <li class="flex items-start gap-3 py-3 border-b border-[rgba(0,31,63,0.08)] last:border-b-0">
            <span class="w-2 h-2 rounded-full bg-coral flex-shrink-0 mt-2"></span>
            <div>
              <span class="font-heading font-semibold text-[15px] text-navy">
                {{ t('meetings.ideas.benefit3Title') }}
              </span>
              <span class="font-body text-[15px] text-navy opacity-70">
                — {{ t('meetings.ideas.benefit3Body') }}
              </span>
            </div>
          </li>

          <li class="flex items-start gap-3 py-3 border-b border-[rgba(0,31,63,0.08)] last:border-b-0">
            <span class="w-2 h-2 rounded-full bg-coral flex-shrink-0 mt-2"></span>
            <div>
              <span class="font-heading font-semibold text-[15px] text-navy">
                {{ t('meetings.ideas.benefit4Title') }}
              </span>
              <span class="font-body text-[15px] text-navy opacity-70">
                — {{ t('meetings.ideas.benefit4Body') }}
              </span>
            </div>
          </li>
        </ul>

        <!-- Sky Divider -->
        <div class="w-full h-px bg-sky opacity-20 my-8"></div>

        <!-- Steps Heading -->
        <h3 class="font-heading font-semibold text-[16px] text-navy mb-1">
          {{ t('meetings.ideas.stepsHeading') }}
        </h3>

        <!-- Steps Intro -->
        <p class="font-body text-[14px] text-navy opacity-60 mb-4">
          {{ t('meetings.ideas.stepsIntro') }}
        </p>

        <!-- Steps -->
        <div class="flex items-start gap-3 mb-4">
          <span class="w-6 h-6 rounded-full bg-coral text-white font-heading font-semibold text-[12px] flex items-center justify-center flex-shrink-0 mt-0.5">
            1
          </span>
          <div>
            <span class="font-heading font-semibold text-[15px] text-navy">
              {{ t('meetings.ideas.step1Title') }}
            </span>
            <span class="font-body text-[15px] text-navy opacity-70">
              — {{ t('meetings.ideas.step1Body') }}
            </span>
          </div>
        </div>

        <div class="flex items-start gap-3 mb-4">
          <span class="w-6 h-6 rounded-full bg-coral text-white font-heading font-semibold text-[12px] flex items-center justify-center flex-shrink-0 mt-0.5">
            2
          </span>
          <div>
            <span class="font-heading font-semibold text-[15px] text-navy">
              {{ t('meetings.ideas.step2Title') }}
            </span>
            <span class="font-body text-[15px] text-navy opacity-70">
              — {{ t('meetings.ideas.step2Body') }}
            </span>
          </div>
        </div>

        <div class="flex items-start gap-3 mb-4">
          <span class="w-6 h-6 rounded-full bg-coral text-white font-heading font-semibold text-[12px] flex items-center justify-center flex-shrink-0 mt-0.5">
            3
          </span>
          <div>
            <span class="font-heading font-semibold text-[15px] text-navy">
              {{ t('meetings.ideas.step3Title') }}
            </span>
            <span class="font-body text-[15px] text-navy opacity-70">
              — {{ t('meetings.ideas.step3Body') }}
            </span>
          </div>
        </div>

        <div class="flex items-start gap-3 mb-4">
          <span class="w-6 h-6 rounded-full bg-coral text-white font-heading font-semibold text-[12px] flex items-center justify-center flex-shrink-0 mt-0.5">
            4
          </span>
          <div>
            <span class="font-heading font-semibold text-[15px] text-navy">
              {{ t('meetings.ideas.step4Title') }}
            </span>
            <span class="font-body text-[15px] text-navy opacity-70">
              — {{ t('meetings.ideas.step4Body') }}
            </span>
          </div>
        </div>

        <!-- Steps Outro -->
        <p class="font-body text-[14px] text-navy opacity-60 italic mt-4">
          {{ t('meetings.ideas.stepsOutro') }}
        </p>
      </ContainerWrapper>

      <!-- Circle Motifs -->
      <div class="absolute bottom-[-60px] right-[-30px] w-[220px] h-[220px] rounded-full bg-sky opacity-[0.07] pointer-events-none"></div>
      <div class="absolute bottom-[-20px] right-[100px] w-[150px] h-[150px] rounded-full bg-coral opacity-[0.06] pointer-events-none"></div>
    </div>
  </SectionWrapper>

  <!-- SECTION 4: CTA -->
  <div class="bg-white py-16 text-center">
    <ContainerWrapper>
      <!-- Heading -->
      <h2 class="font-heading font-bold text-[28px] text-navy mb-3">
        {{ t('meetings.cta.heading') }}
      </h2>

      <!-- Body -->
      <p class="font-body text-[16px] text-navy opacity-70 max-w-[480px] mx-auto mb-8">
        {{ t('meetings.cta.body') }}
      </p>

      <!-- CTA Button -->
      <a
        :href="'mailto:asociacionchecagalicia@gmail.com?subject=' + encodeURIComponent(t('meetings.cta.emailSubject'))"
        :aria-label="t('meetings.cta.ariaLabel')"
        class="inline-flex items-center justify-center bg-coral text-white font-heading font-semibold text-[16px] px-8 py-4 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
      >
        {{ t('meetings.cta.button') }}
      </a>

      <!-- Email Fallback -->
      <p class="font-body text-[14px] text-navy opacity-50 mt-3">
        asociacionchecagalicia@gmail.com
      </p>
    </ContainerWrapper>
  </div>
</template>
