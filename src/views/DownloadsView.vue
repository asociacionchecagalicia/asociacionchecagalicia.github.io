<script setup>
import { useLanguage } from '@/composables/useLanguage'
import SectionWrapper from '@/components/layout/SectionWrapper.vue'
import ContainerWrapper from '@/components/layout/ContainerWrapper.vue'
import { FileText, Download } from 'lucide-vue-next'

const { t } = useLanguage()
</script>

<template>
  <SectionWrapper background="#F9F9F9" class="relative">
    <ContainerWrapper>
      <!-- Page Heading -->
      <h1 class="font-heading font-bold text-[48px] text-navy leading-tight tracking-tighter mb-12">
        {{ t('downloads.heading') }}
      </h1>

      <!-- Two-Column Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- COLUMN 1: Privacy Policy -->
        <div id="privacy">
          <h2 class="font-heading font-semibold text-[24px] text-navy mb-6">
            {{ t('downloads.privacyHeading') }}
          </h2>

          <!-- Privacy Document Card -->
          <div class="border border-[rgba(0,31,63,0.1)] rounded-xl p-6 bg-white">
            <!-- File Info Row -->
            <div class="flex items-center gap-3 mb-4">
              <FileText :size="24" :stroke-width="1.5" class="text-navy" />
              <span class="font-body text-[16px] text-navy">
                {{ t('downloads.privacyFileName') }}
              </span>
            </div>

            <!-- Download Button -->
            <a
              href="/assets/politica_privacidad_RGPD.pdf"
              download
              target="_blank"
              :aria-label="t('downloads.privacyDownload') + ' - PDF'"
              class="flex items-center justify-center gap-2 bg-coral text-white font-heading font-semibold text-[16px] px-6 py-3 rounded-lg w-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download :size="18" :stroke-width="1.5" />
              {{ t('downloads.privacyDownload') }}
            </a>
          </div>
        </div>

        <!-- COLUMN 2: Annual Reports -->
        <div id="reports">
          <h2 class="font-heading font-semibold text-[24px] text-navy mb-6">
            {{ t('downloads.reportsHeading') }}
          </h2>

          <!-- Reports Content Card -->
          <div class="border border-[rgba(0,31,63,0.1)] rounded-xl p-6 bg-white">
            <!-- Inactive Document Row -->
            <div class="flex items-center gap-3 opacity-40">
              <FileText :size="24" :stroke-width="1.5" class="text-navy" />
              <span class="font-body text-[16px] text-navy cursor-not-allowed" aria-disabled="true">
                {{ t('downloads.reportsYear') }}
              </span>
            </div>

            <!-- Coming Soon Notice -->
            <p class="mt-3 font-body text-[14px] text-navy opacity-50">
              {{ t('downloads.reportsComingSoon') }}
            </p>
          </div>
        </div>
      </div>
    </ContainerWrapper>

    <!-- Visual Motif: Overlapping Circles (top-right) -->
    <div class="absolute top-[-60px] right-[-40px] w-[260px] h-[260px] rounded-full bg-coral opacity-[0.05] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute top-[40px] right-[60px] w-[180px] h-[180px] rounded-full bg-sky opacity-[0.06] pointer-events-none" aria-hidden="true"></div>
  </SectionWrapper>
</template>
