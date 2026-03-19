<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage.js'
import { useSEO } from '@/composables/useSEO.js'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import ContainerWrapper from '@/components/layout/ContainerWrapper.vue'
import HeadingBlock from '@/components/layout/HeadingBlock.vue'

const { currentLang, t } = useLanguage()

// SEO
useSEO({
  title: computed(() => t('home.seo.title')),
  description: computed(() => t('home.seo.description'))
})

// Hero word swap animation
const words = computed(() => t('home.hero.swapWords'))
const currentWordIndex = ref(0)
const isVisible = ref(true)

onMounted(() => {
  setInterval(() => {
    isVisible.value = false
    setTimeout(() => {
      currentWordIndex.value = (currentWordIndex.value + 1) % words.value.length
      isVisible.value = true
    }, 400)
  }, 3000)
})

// Time-based greeting
const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return t('home.greeting.morning')
  if (hour >= 12 && hour < 18) return t('home.greeting.afternoon')
  return t('home.greeting.evening')
})
</script>

<template>
  <!-- SECTION 1: HERO -->
  <div class="relative min-h-[520px] md:min-h-[640px] overflow-hidden">
    <!-- Background Image -->
    <img
      src="/assets/Hero background - photo.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />

    <!-- Sky Overlay -->
    <div class="absolute inset-0 bg-[#5FA8D3] opacity-60"></div>

    <!-- Content Layer -->
    <div class="relative z-10 pt-32 pb-20">
      <ContainerWrapper>
        <h1 style="filter: drop-shadow(0 2px 8px rgba(255,255,255,0.4))">
          <!-- Line 1: Static text -->
          <span class="block font-heading font-bold text-[42px] md:text-[56px] lg:text-[64px] text-navy leading-tight tracking-tighter">
            {{ t('home.hero.headlineStart') }}
          </span>

          <!-- Line 2: Animated word swap -->
          <span
            :class="[
              'block font-heading font-bold text-[42px] md:text-[56px] lg:text-[64px] text-coral leading-tight tracking-tighter',
              'transition-all duration-400 ease-in-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            ]"
          >
            {{ words[currentWordIndex] }}
          </span>
        </h1>
      </ContainerWrapper>
    </div>
  </div>

  <!-- SECTION 2: GREETING BANNER -->
  <div class="bg-white border-y border-[rgba(0,31,63,0.1)] py-5">
    <ContainerWrapper>
      <div class="flex items-center gap-4">
        <!-- Home Icon -->
        <img
          src="/assets/Home_icon.svg"
          alt=""
          aria-hidden="true"
          class="w-[52px] h-[52px] flex-shrink-0"
        />

        <!-- Text Block -->
        <div>
          <h3 class="font-heading font-semibold text-[20px] text-navy">
            {{ greeting }}
          </h3>
          <p class="mt-1 font-body text-[15px] text-navy opacity-80 max-w-[720px]">
            {{ t('home.greeting.body') }}
          </p>
        </div>
      </div>
    </ContainerWrapper>
  </div>

  <!-- SECTION 3: EVENTS -->
  <SectionWrapper background="offwhite" id="events">
    <div class="relative overflow-hidden">
      <ContainerWrapper>
        <HeadingBlock
          :title="t('home.events.heading')"
          :subtitle="t('home.events.subheading')"
          align="left"
        />

        <!-- Primary CTA -->
        <div class="mt-6 mb-8">
          <a
            href="https://calendar.google.com/calendar/u/0/r?cid=asociacionchecagalicia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center border border-coral text-coral font-heading font-semibold text-[15px] px-5 py-2.5 rounded-lg hover:bg-coral hover:text-white transition-colors duration-200"
          >
            {{ t('home.events.cta') }}
          </a>
        </div>

        <!-- Google Calendar Embed -->
        <div class="rounded-xl overflow-hidden border border-[rgba(0,31,63,0.1)] shadow-sm">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=asociacionchecagalicia%40gmail.com&ctz=Europe%2FMadrid&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            :title="t('home.events.calendarAriaLabel')"
            class="block w-full"
          ></iframe>
        </div>
      </ContainerWrapper>

      <!-- Visual Motif: Overlapping Circles -->
      <div class="absolute bottom-[-80px] right-[-40px] w-[280px] h-[280px] rounded-full bg-coral opacity-[0.08] pointer-events-none"></div>
      <div class="absolute bottom-[-20px] right-[100px] w-[200px] h-[200px] rounded-full bg-sky opacity-[0.10] pointer-events-none"></div>
    </div>
  </SectionWrapper>

  <!-- SECTION 4: COLLABORATION -->
  <SectionWrapper background="white">
    <ContainerWrapper>
      <HeadingBlock
        :title="t('home.collaboration.heading')"
        align="center"
      />

      <!-- Two-Column Card Layout -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Card 1: Build Community -->
        <div>
          <img
            src="/assets/Building community - photo.jpg"
            :alt="t('home.collaboration.card1.imageAlt')"
            class="w-full h-[260px] object-cover rounded-xl"
            loading="lazy"
          />

          <div class="mt-4">
            <h3 class="font-heading font-semibold text-[22px] text-navy leading-snug mb-3">
              {{ t('home.collaboration.card1.heading') }}
            </h3>

            <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-4">
              {{ t('home.collaboration.card1.body') }}
            </p>

            <RouterLink
              :to="currentLang === 'cz' ? '/cz/jak-se-zapojit' : '/es/como-participar'"
              class="inline-flex items-center gap-1 font-heading font-semibold text-[15px] text-coral hover:opacity-80 transition-opacity duration-200"
            >
              {{ t('home.collaboration.card1.cta') }}
              <ArrowRight :size="16" />
            </RouterLink>
          </div>
        </div>

        <!-- Card 2: Have Ideas -->
        <div>
          <img
            src="/assets/Idea for event - photo.png"
            :alt="t('home.collaboration.card2.imageAlt')"
            class="w-full h-[260px] object-cover rounded-xl"
            loading="lazy"
          />

          <div class="mt-4">
            <h3 class="font-heading font-semibold text-[22px] text-navy leading-snug mb-3">
              {{ t('home.collaboration.card2.heading') }}
            </h3>

            <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-4">
              {{ t('home.collaboration.card2.body') }}
            </p>

            <RouterLink
              :to="currentLang === 'cz' ? '/cz/jak-se-potkavame' : '/es/como-nos-reunimos'"
              class="inline-flex items-center gap-1 font-heading font-semibold text-[15px] text-coral hover:opacity-80 transition-opacity duration-200"
            >
              {{ t('home.collaboration.card2.cta') }}
              <ArrowRight :size="16" />
            </RouterLink>
          </div>
        </div>

      </div>
    </ContainerWrapper>
  </SectionWrapper>
</template>
