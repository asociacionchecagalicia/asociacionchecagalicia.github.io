<script setup>
import { useLanguage } from '@/composables/useLanguage'
import ContainerWrapper from '@/components/layout/ContainerWrapper.vue'
import AppLogo from '@/components/global/AppLogo.vue'
import { Facebook, Instagram, ArrowRight } from 'lucide-vue-next'

const { currentLang, t } = useLanguage()
</script>

<template>
  <footer role="contentinfo" class="bg-white py-12 md:py-16">
    <ContainerWrapper>
      <!-- Main Footer Card -->
      <div class="relative overflow-hidden border border-sky rounded-xl p-8 md:p-12">
        <!-- Grid Layout: 3 columns desktop, 2 tablet, stacked mobile -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          <!-- COLUMN 1: Logo + Contact -->
          <div class="flex flex-col">
            <RouterLink
              :to="'/' + currentLang + '/'"
              :aria-label="t('footer.home')"
              class="h-[44px] w-fit"
            >
              <AppLogo />
            </RouterLink>

            <div class="mt-6">
              <h3 class="font-heading font-semibold text-[16px] text-navy">
                {{ t('footer.contact.heading') }}
              </h3>
              <a
                href="mailto:asociacionchecagalicia@gmail.com"
                class="font-body text-[16px] text-navy hover:text-coral hover:underline transition-colors duration-200 mt-2 block"
              >
                {{ t('footer.contact.email') }}
              </a>
            </div>
          </div>

          <!-- COLUMN 2: Documents / Resources -->
          <div class="flex flex-col">
            <!-- Clickable Heading -->
            <RouterLink
              :to="'/' + currentLang + '/' + t('downloads.slug')"
              class="font-heading font-semibold text-[16px] text-navy hover:text-coral transition-colors duration-200 inline-flex items-center gap-1 w-fit"
              active-class="text-coral underline decoration-coral underline-offset-4"
              exact-active-class="text-coral underline decoration-coral underline-offset-4"
            >
              {{ t('footer.resources.heading') }}
              <ArrowRight :size="14" :stroke-width="1.5" />
            </RouterLink>

            <!-- Sub-links with Anchors -->
            <div class="mt-3 flex flex-col gap-2">
              <RouterLink
                :to="'/' + currentLang + '/' + t('downloads.slug') + '#privacy'"
                class="font-body text-[16px] text-navy hover:text-coral hover:underline transition-colors duration-200"
                active-class="text-coral underline decoration-coral underline-offset-4"
                exact-active-class="text-coral underline decoration-coral underline-offset-4"
              >
                {{ t('footer.resources.privacy') }}
              </RouterLink>

              <RouterLink
                :to="'/' + currentLang + '/' + t('downloads.slug') + '#reports'"
                class="font-body text-[16px] text-navy hover:text-coral hover:underline transition-colors duration-200"
                active-class="text-coral underline decoration-coral underline-offset-4"
                exact-active-class="text-coral underline decoration-coral underline-offset-4"
              >
                {{ t('footer.resources.reports') }}
              </RouterLink>
            </div>
          </div>

          <!-- COLUMN 3: Social Media -->
          <div class="flex flex-col">
            <h3 class="font-heading font-semibold text-[16px] text-navy mb-4">
              {{ t('footer.social.heading') }}
            </h3>

            <div class="flex flex-col gap-3">
              <a
                href="https://www.facebook.com/culturachecagalicia"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="t('footer.social.facebookAriaLabel')"
                class="flex items-center gap-2 font-body text-[16px] text-navy hover:text-coral transition-colors duration-200"
              >
                <Facebook :size="20" :stroke-width="1.5" />
                {{ t('footer.social.facebook') }}
              </a>

              <a
                href="https://www.instagram.com/asociacionchecagalicia/"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="t('footer.social.instagramAriaLabel')"
                class="flex items-center gap-2 font-body text-[16px] text-navy hover:text-coral transition-colors duration-200"
              >
                <Instagram :size="20" :stroke-width="1.5" />
                {{ t('footer.social.instagram') }}
              </a>
            </div>
          </div>
        </div>

        <!-- Visual Motif: Overlapping Circles (bottom-right) -->
        <div class="absolute bottom-[-70px] right-[100px] w-[240px] h-[240px] rounded-full bg-coral opacity-[0.09] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute bottom-[-40px] right-[20px] w-[180px] h-[180px] rounded-full bg-sky opacity-[0.08] pointer-events-none" aria-hidden="true"></div>
      </div>

      <!-- Credits Bar -->
      <div class="mt-6 pb-8 text-center">
        <p class="font-body text-[14px] text-navy opacity-60">
          {{ t('footer.credits') }}
        </p>
      </div>
    </ContainerWrapper>
  </footer>
</template>
