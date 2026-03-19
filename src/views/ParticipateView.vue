<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Facebook, Instagram, Mail, ChevronDown } from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage.js'
import { useSEO } from '@/composables/useSEO.js'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import ContainerWrapper from '@/components/layout/ContainerWrapper.vue'

const { t, currentLang } = useLanguage()

useSEO({
  title: computed(() => t('participate.seo.title')),
  description: computed(() => t('participate.seo.description'))
})

const rolesVisible = ref(false)
const toggleRoles = () => {
  rolesVisible.value = !rolesVisible.value
}

const roleCards = [
  {
    roleKey: 'participate.involve.roles.card1.role',
    descriptionKey: 'participate.involve.roles.card1.description',
    taskKeys: [
      'participate.involve.roles.card1.task1',
      'participate.involve.roles.card1.task2',
      'participate.involve.roles.card1.task3',
      'participate.involve.roles.card1.task4'
    ],
    profileKey: 'participate.involve.roles.card1.profile'
  },
  {
    roleKey: 'participate.involve.roles.card2.role',
    descriptionKey: 'participate.involve.roles.card2.description',
    taskKeys: [
      'participate.involve.roles.card2.task1',
      'participate.involve.roles.card2.task2'
    ],
    profileKey: 'participate.involve.roles.card2.profile'
  },
  {
    roleKey: 'participate.involve.roles.card3.role',
    descriptionKey: 'participate.involve.roles.card3.description',
    taskKeys: [
      'participate.involve.roles.card3.task1',
      'participate.involve.roles.card3.task2',
      'participate.involve.roles.card3.task3'
    ],
    profileKey: 'participate.involve.roles.card3.profile'
  },
  {
    roleKey: 'participate.involve.roles.card4.role',
    descriptionKey: 'participate.involve.roles.card4.description',
    taskKeys: [
      'participate.involve.roles.card4.task1',
      'participate.involve.roles.card4.task2',
      'participate.involve.roles.card4.task3'
    ],
    profileKey: 'participate.involve.roles.card4.profile'
  }
]
</script>

<template>
  <!-- SECTION 1: HERO -->
  <div class="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
    <!-- Background Image -->
    <img
      src="/assets/How to join_hero_photo.png"
      :alt="t('participate.hero.imageAlt')"
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
          {{ t('participate.hero.headline') }}
        </h1>
      </ContainerWrapper>
    </div>

    <!-- Circle Motifs -->
    <div class="absolute top-[-50px] right-[-30px] w-[200px] h-[200px] rounded-full bg-coral opacity-[0.07] pointer-events-none"></div>
    <div class="absolute top-[20px] right-[80px] w-[140px] h-[140px] rounded-full bg-sky opacity-[0.07] pointer-events-none"></div>
  </div>

  <!-- SECTION 2: PŘIJĎTE MEZI NÁS -->
  <SectionWrapper background="white">
    <ContainerWrapper>
      <!-- Heading Row -->
      <div class="flex items-center gap-4 mb-6">
        <img
          src="/assets/Ideas_icon.svg"
          :alt="t('participate.join.iconAlt')"
          class="w-[52px] h-[52px] flex-shrink-0"
          loading="lazy"
        />
        <h2 class="font-heading font-bold text-[32px] text-navy leading-tight">
          {{ t('participate.join.heading') }}
        </h2>
      </div>

      <!-- Paragraphs -->
      <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-2 max-w-[640px]">
        {{ t('participate.join.p1') }}
      </p>
      <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-2 max-w-[640px]">
        {{ t('participate.join.p2') }}
      </p>
      <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-2 max-w-[640px]">
        {{ t('participate.join.p3') }}
      </p>

      <!-- CTA -->
      <div class="mt-6">
        <RouterLink
          :to="'/' + currentLang + '/#events'"
          :aria-label="t('participate.join.ctaAriaLabel')"
          class="inline-flex items-center gap-2 border border-coral text-coral font-heading font-semibold text-[15px] px-5 py-2.5 rounded-lg hover:bg-coral hover:text-white transition-colors duration-200"
        >
          {{ t('participate.join.cta') }}
        </RouterLink>
      </div>
    </ContainerWrapper>
  </SectionWrapper>

  <!-- SECTION 3: ZŮSTAŇTE V KONTAKTU -->
  <SectionWrapper background="offwhite">
    <ContainerWrapper>
      <!-- Heading Row -->
      <div class="flex items-center gap-4 mb-6">
        <img
          src="/assets/Events_icon.svg"
          :alt="t('participate.contact.iconAlt')"
          class="w-[52px] h-[52px] flex-shrink-0"
          loading="lazy"
        />
        <h2 class="font-heading font-bold text-[32px] text-navy leading-tight">
          {{ t('participate.contact.heading') }}
        </h2>
      </div>

      <!-- Paragraphs -->
      <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-2 max-w-[640px]">
        {{ t('participate.contact.p1') }}
      </p>
      <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-2 max-w-[640px]">
        {{ t('participate.contact.p2') }}
      </p>

      <!-- Social Links -->
      <div class="mt-4 mb-4 flex flex-col gap-2">
        <a
          href="https://www.facebook.com/groups/815216144934046"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="t('participate.contact.facebookAriaLabel')"
          class="inline-flex items-center gap-2 font-body text-[16px] text-navy hover:text-coral transition-colors duration-200"
        >
          <Facebook :size="18" :stroke-width="1.5" />
          {{ t('participate.contact.facebook') }}
        </a>
        <a
          href="https://www.instagram.com/asociacionchecagalicia/"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="t('participate.contact.instagramAriaLabel')"
          class="inline-flex items-center gap-2 font-body text-[16px] text-navy hover:text-coral transition-colors duration-200"
        >
          <Instagram :size="18" :stroke-width="1.5" />
          {{ t('participate.contact.instagram') }}
        </a>
      </div>

      <!-- p3 -->
      <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mt-4 max-w-[640px]">
        {{ t('participate.contact.p3') }}
      </p>
    </ContainerWrapper>
  </SectionWrapper>

  <!-- SECTION 4: DIVIDER BAND -->
  <div class="w-full bg-[#EEF6FB] border-y border-[rgba(95,168,211,0.4)] py-10">
    <ContainerWrapper>
      <p class="font-heading font-bold text-[28px] md:text-[36px] text-navy leading-tight text-center">
        {{ t('participate.divider.text') }}
      </p>
    </ContainerWrapper>
  </div>

  <!-- SECTION 5: FULL-WIDTH IMAGE -->
  <img
    src="/assets/How to join_asociacion_photo.png"
    :alt="t('participate.involve.imageAlt')"
    class="w-full h-[360px] md:h-[460px] object-cover"
    loading="lazy"
  />

  <!-- SECTION 6: TWO CARDS + COLLAPSIBLE ROLES -->
  <SectionWrapper background="white">
    <div class="relative">
      <ContainerWrapper>
        <!-- Section Intro -->
        <h2 class="font-heading font-bold text-[28px] md:text-[34px] text-navy leading-tight tracking-tighter mb-3">
          {{ t('participate.involve.heading') }}
        </h2>
        <p class="font-body text-[16px] text-navy opacity-80 leading-relaxed mb-8 max-w-[640px]">
          {{ t('participate.involve.subheading') }}
        </p>

        <!-- Two Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- VOLUNTEER CARD (left) -->
          <div class="border border-sky rounded-xl p-6 bg-white">
            <span class="inline-block font-heading font-semibold text-[11px] text-sky border border-sky rounded-full px-3 py-1 mb-4">
              {{ t('participate.involve.volunteer.tag') }}
            </span>

            <h3 class="font-heading font-bold text-[20px] text-navy mb-1">
              {{ t('participate.involve.volunteer.heading') }}
            </h3>

            <p class="font-body text-[14px] text-navy opacity-70 italic mb-4">
              {{ t('participate.involve.volunteer.subheading') }}
            </p>

            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 font-body text-[15px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2"></span>
                {{ t('participate.involve.volunteer.item1') }}
              </li>
              <li class="flex items-start gap-2 font-body text-[15px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2"></span>
                {{ t('participate.involve.volunteer.item2') }}
              </li>
              <li class="flex items-start gap-2 font-body text-[15px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2"></span>
                {{ t('participate.involve.volunteer.item3') }}
              </li>
            </ul>

            <a
              :href="'mailto:asociacionchecagalicia@gmail.com?subject=' + encodeURIComponent(t('participate.involve.volunteer.emailSubject'))"
              :aria-label="t('participate.involve.volunteer.ariaLabel')"
              class="inline-flex items-center gap-2 font-heading font-semibold text-[14px] text-sky hover:text-coral transition-colors duration-200 mb-1"
            >
              <Mail :size="16" :stroke-width="1.5" />
              {{ t('participate.involve.volunteer.cta') }}
            </a>
            <p class="font-body text-[13px] text-navy opacity-50 mt-1">
              {{ t('participate.involve.volunteer.ctaNote') }}
            </p>
          </div>

          <!-- CORE TEAM CARD (right) -->
          <div class="border border-sky rounded-xl p-6 bg-white">
            <span class="inline-block font-heading font-semibold text-[11px] text-sky border border-sky rounded-full px-3 py-1 mb-4">
              {{ t('participate.involve.core.tag') }}
            </span>

            <h3 class="font-heading font-bold text-[20px] text-navy mb-1">
              {{ t('participate.involve.core.heading') }}
            </h3>

            <p class="font-body text-[14px] text-navy opacity-70 italic mb-4">
              {{ t('participate.involve.core.subheading') }}
            </p>

            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 font-body text-[15px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2"></span>
                {{ t('participate.involve.core.item1') }}
              </li>
              <li class="flex items-start gap-2 font-body text-[15px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2"></span>
                {{ t('participate.involve.core.item2') }}
              </li>
              <li class="flex items-start gap-2 font-body text-[15px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2"></span>
                {{ t('participate.involve.core.item3') }}
              </li>
              <li class="flex items-start gap-2 font-body text-[15px] text-navy">
                <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-2"></span>
                {{ t('participate.involve.core.item4') }}
              </li>
            </ul>

            <a
              :href="'mailto:asociacionchecagalicia@gmail.com?subject=' + encodeURIComponent(t('participate.involve.core.emailSubject'))"
              :aria-label="t('participate.involve.core.ariaLabel')"
              class="inline-flex items-center gap-2 font-heading font-semibold text-[14px] text-sky hover:text-coral transition-colors duration-200 mb-1"
            >
              <Mail :size="16" :stroke-width="1.5" />
              {{ t('participate.involve.core.cta') }}
            </a>
            <p class="font-body text-[13px] text-navy opacity-50 mt-1">
              {{ t('participate.involve.core.ctaNote') }}
            </p>

            <!-- Toggle Button -->
            <div class="mt-6 pt-4 border-t border-[rgba(0,31,63,0.08)]">
              <button
                @click="toggleRoles"
                :aria-expanded="rolesVisible"
                class="flex items-center gap-2 w-full font-heading font-semibold text-[14px] text-navy hover:text-coral transition-colors duration-200"
              >
                <span>{{ rolesVisible ? t('participate.involve.core.toggleHide') : t('participate.involve.core.toggleShow') }}</span>
                <ChevronDown
                  :size="16"
                  class="transition-transform duration-300"
                  :class="rolesVisible ? 'rotate-180' : ''"
                />
              </button>
            </div>
          </div>
        </div>

        <!-- COLLAPSIBLE ROLES SECTION -->
        <Transition name="expand">
          <div v-if="rolesVisible" class="mt-8">
            <h3 class="font-heading font-semibold text-[18px] text-navy mb-6">
              {{ t('participate.involve.roles.heading') }}
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                v-for="(card, index) in roleCards"
                :key="index"
                class="border border-[rgba(0,31,63,0.1)] rounded-xl p-5 bg-[#F9F9F9]"
              >
                <!-- Role Title -->
                <p class="font-heading font-semibold text-[15px] text-navy mb-1">
                  {{ t(card.roleKey) }}
                </p>

                <!-- Description -->
                <p class="font-body text-[13px] text-navy opacity-70 leading-relaxed mb-3">
                  {{ t(card.descriptionKey) }}
                </p>

                <!-- Tasks -->
                <p class="font-heading font-semibold text-[12px] text-navy opacity-60 uppercase tracking-wide mb-2">
                  {{ t('participate.involve.roles.tasksLabel') }}
                </p>
                <ul class="space-y-1 mb-3">
                  <li
                    v-for="(taskKey, ti) in card.taskKeys"
                    :key="ti"
                    class="flex items-start gap-2 font-body text-[13px] text-navy"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0 mt-1.5"></span>
                    {{ t(taskKey) }}
                  </li>
                </ul>

                <!-- Profile -->
                <div class="mt-3 pt-3 border-t border-[rgba(0,31,63,0.08)]">
                  <p class="font-heading font-semibold text-[12px] text-navy opacity-60 uppercase tracking-wide mb-1">
                    {{ t('participate.involve.roles.profileLabel') }}
                  </p>
                  <p class="font-body text-[13px] text-coral italic leading-relaxed">
                    {{ t(card.profileKey) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </ContainerWrapper>

      <!-- Circle Motifs -->
      <div class="absolute bottom-[-70px] right-[-40px] w-[240px] h-[240px] rounded-full bg-sky opacity-[0.07] pointer-events-none"></div>
      <div class="absolute bottom-[-30px] right-[100px] w-[160px] h-[160px] rounded-full bg-coral opacity-[0.06] pointer-events-none"></div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.3s ease;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
</style>
