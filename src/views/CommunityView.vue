<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'
import { useSEO } from '@/composables/useSEO.js'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import ContainerWrapper from '@/components/layout/ContainerWrapper.vue'

const { t, currentLang } = useLanguage()

// SEO
useSEO({
  title: computed(() => t('community.seo.title')),
  description: computed(() => t('community.seo.description'))
})
</script>

<template>
  <!-- SECTION 1: HERO -->
  <div class="relative min-h-[420px] md:min-h-[520px] overflow-hidden">
    <!-- Background Image -->
    <img
      src="/assets/About community hero background - photo.png"
      :alt="t('community.hero.imageAlt')"
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
          {{ t('community.hero.headline') }}
        </h1>
      </ContainerWrapper>
    </div>

    <!-- Circle Motifs -->
    <div class="absolute top-[-60px] right-[-40px] w-[240px] h-[240px] rounded-full bg-coral opacity-[0.07] pointer-events-none"></div>
    <div class="absolute top-[20px] right-[80px] w-[160px] h-[160px] rounded-full bg-sky opacity-[0.07] pointer-events-none"></div>
  </div>

  <!-- SECTION 2: O NÁS A NÁŠ TÝM -->
  <SectionWrapper background="white">
    <ContainerWrapper>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- LEFT — Image -->
        <img
          src="/assets/About community origin - photo.png"
          :alt="t('community.about.imageAlt')"
          class="w-full h-[420px] md:h-[520px] object-cover rounded-xl"
          loading="lazy"
        />

        <!-- RIGHT — Text -->
        <div>
          <h2 class="font-heading font-bold text-[32px] md:text-[38px] text-navy leading-tight tracking-tighter mb-4">
            {{ t('community.about.heading') }}
          </h2>

          <h3 class="font-heading font-semibold text-[16px] text-coral mb-4">
            {{ t('community.about.subheading') }}
          </h3>

          <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mb-4">
            {{ t('community.about.p1') }}
          </p>

          <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mb-4">
            {{ t('community.about.p3') }}
          </p>

          <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mb-4">
            {{ t('community.about.p4') }}
          </p>

          <!-- List Section -->
          <div class="mt-4">
            <p class="font-body text-[16px] text-navy font-semibold mb-2">
              {{ t('community.about.listIntro') }}
            </p>

            <ul class="space-y-1 mb-4">
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.about.list1') }}</span>
              </li>
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.about.list2') }}</span>
              </li>
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.about.list3') }}</span>
              </li>
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.about.list4') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  </SectionWrapper>

  <!-- SECTION 3: PROČ ZAKLÁDÁME SPOLEK -->
  <SectionWrapper background="offwhite">
    <div class="relative">
      <ContainerWrapper>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <!-- LEFT — Text -->
          <div>
            <h2 class="font-heading font-bold text-[32px] md:text-[38px] text-navy leading-tight tracking-tighter mb-4">
              {{ t('community.why.heading') }}
            </h2>

            <h3 class="font-heading font-semibold text-[16px] text-coral mb-4">
              {{ t('community.why.subheading') }}
            </h3>

            <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mb-4">
              {{ t('community.why.p5') }}
            </p>

            <!-- List Section -->
            <div class="mt-4">
              <p class="font-body text-[16px] text-navy font-semibold mb-2">
                {{ t('community.why.listIntro') }}
              </p>

              <ul class="space-y-1 mb-4">
                <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                  <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                  <span>{{ t('community.why.list1') }}</span>
                </li>
                <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                  <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                  <span>{{ t('community.why.list2') }}</span>
                </li>
                <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                  <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                  <span>{{ t('community.why.list3') }}</span>
                </li>
                <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                  <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                  <span>{{ t('community.why.list4') }}</span>
                </li>
              </ul>

              <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mt-4">
                {{ t('community.why.p7') }}
              </p>
            </div>
          </div>

          <!-- RIGHT — Image -->
          <img
            src="/assets/About community holding hands - photo.png"
            :alt="t('community.why.imageAlt')"
            class="w-full h-[380px] md:h-[460px] object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </ContainerWrapper>

      <!-- Circle Motifs -->
      <div class="absolute bottom-[-60px] right-[-20px] w-[200px] h-[200px] rounded-full bg-sky opacity-[0.08] pointer-events-none"></div>
      <div class="absolute bottom-[-20px] right-[80px] w-[140px] h-[140px] rounded-full bg-coral opacity-[0.07] pointer-events-none"></div>
    </div>
  </SectionWrapper>

  <!-- SECTION 4: KDO KE KOMUNITĚ PATŘÍ -->
  <SectionWrapper background="white">
    <ContainerWrapper>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- LEFT — Text -->
        <div>
          <h2 class="font-heading font-bold text-[32px] md:text-[38px] text-navy leading-tight tracking-tighter mb-4">
            {{ t('community.who.heading') }}
          </h2>

          <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mb-4">
            {{ t('community.who.p8') }}
          </p>

          <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mb-4">
            {{ t('community.who.p9') }}
          </p>

          <p class="font-body text-[16px] text-navy leading-relaxed opacity-90 mb-4">
            {{ t('community.who.p10') }}
          </p>

          <!-- Rules Section -->
          <div class="mt-4">
            <p class="font-body text-[16px] text-navy font-semibold mb-2">
              {{ t('community.who.rulesIntro') }}
            </p>

            <ul class="space-y-1 mb-6">
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.who.rule1') }}</span>
              </li>
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.who.rule2') }}</span>
              </li>
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.who.rule3') }}</span>
              </li>
              <li class="flex items-start gap-2 font-body text-[16px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0"></span>
                <span>{{ t('community.who.rule4') }}</span>
              </li>
            </ul>

            <!-- Pull Quote -->
            <blockquote class="border-l-4 border-coral bg-[#FDF5F4] rounded-r-xl px-6 py-5 mt-6">
              <p class="font-heading font-semibold text-[18px] text-navy leading-relaxed italic">
                {{ t('community.who.quote') }}
              </p>
            </blockquote>
          </div>
        </div>

        <!-- RIGHT — Image -->
        <img
          src="/assets/About community join us - photo.png"
          :alt="t('community.who.imageAlt')"
          class="w-full h-[380px] md:h-[460px] object-cover rounded-xl"
          loading="lazy"
        />
      </div>
    </ContainerWrapper>
  </SectionWrapper>

  <!-- SECTION 5: SKY DIVIDER -->
  <div class="w-full py-1 bg-[#5FA8D3] opacity-20"></div>

  <!-- SECTION 6: SPONZOŘI A SPOLUPRÁCE -->
  <div class="relative overflow-hidden bg-[#EEF6FB] py-20">
    <!-- Circle Motifs -->
    <div class="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full bg-sky opacity-[0.08] pointer-events-none"></div>
    <div class="absolute top-[-20px] right-[120px] w-[200px] h-[200px] rounded-full bg-coral opacity-[0.07] pointer-events-none"></div>

    <!-- Content -->
    <div class="relative z-10">
      <ContainerWrapper>
        <div class="text-center">
          <h2 class="font-heading font-bold text-[32px] md:text-[40px] text-navy leading-tight tracking-tighter mb-4">
            {{ t('community.sponsors.heading') }}
          </h2>

          <p class="font-heading font-semibold text-[20px] text-coral mb-6">
            {{ t('community.sponsors.subheading') }}
          </p>

          <p class="font-body text-[16px] text-navy opacity-80 max-w-[560px] mx-auto mb-8 leading-relaxed">
            {{ t('community.sponsors.body') }}
          </p>

          <p class="font-body text-[14px] text-navy opacity-60 mb-3">
            {{ t('community.sponsors.ctaLabel') }}
          </p>

          <a
            :href="'mailto:asociacionchecagalicia@gmail.com?subject=' + (currentLang === 'cz' ? encodeURIComponent('Spolupráce — web') : encodeURIComponent('Colaboración — web'))"
            :aria-label="t('community.sponsors.ctaAriaLabel')"
            class="inline-flex items-center justify-center bg-coral text-white font-heading font-semibold text-[16px] px-8 py-4 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            {{ t('community.sponsors.ctaButton') }}
          </a>

          <p class="font-body text-[14px] text-navy opacity-60 mt-3">
            asociacionchecagalicia@gmail.com
          </p>
        </div>
      </ContainerWrapper>
    </div>
  </div>
</template>
