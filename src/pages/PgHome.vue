<script setup lang="ts">
import type { Item as AccordionItem } from '@/components/molecules/MlAccordion.vue'
import AtAvatar from '@/components/atoms/AtAvatar.vue'
import AtButton from '@/components/atoms/AtButton.vue'
import AtPageSubTitle from '@/components/atoms/AtPageSubTitle.vue'
import AtPageTitle from '@/components/atoms/AtPageTitle.vue'
import MlAccordion from '@/components/molecules/MlAccordion.vue'
import Dialog from '@/components/ui/dialog/Dialog.vue'
import DialogContent from '@/components/ui/dialog/DialogContent.vue'
import DialogTrigger from '@/components/ui/dialog/DialogTrigger.vue'
import { Calendar, MessageCircleMore } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function showCalendly() {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.body.appendChild(script)
}

const faqItems: AccordionItem[] = [
  {
    value: 'faq-item-1',
    title: t('🚀 What service do you offer?'),
    content: t('I build your mobile/desktop/web application (e.g., startup product, company internal tool, personal hobby app). Consulting and working on your existing project is also an option if your tech stack matches mine.'),
  },
  { value: 'faq-item-2', title: t('💰 How much does a custom project cost?'), content: t('The cost of a project depends on many factors, such as the size of the project, the features, the development time, etc. Nonetheless, I can already tell you that I will only commit to your project if I evaluates its magnitude to 3750€ or higher.') },
  { value: 'faq-item-3', title: t('💸 What is your daily rate?'), content: t('If you need me to work on an existing project of yours I usually charge 750€ per day.') },
  { value: 'faq-item-4', title: t('💳 How does payment work for a project?'), content: t('I ask for a 40% deposit before starting a project, and the remaining 60% after successful delivery. I accept payments by bank transfer, PayPal, etc.') },
  { value: 'faq-item-5', title: t('⏳ How long does a project take?'), content: t('It\'s difficult to give an exact estimate, as each project is different, but the majority of my past work has taken between 2 weeks and 2 months.') },
  { value: 'faq-item-6', title: t('🏷️ Do you offer discounts?'), content: t('I offer a 10% discount for non-profit organizations.') },
]
</script>

<template>
  <div class="mt-6">
    <AtAvatar />
  </div>

  <AtPageTitle>
    <template #default>
      {{ t('Fullstack Developer') }}
    </template>
  </AtPageTitle>

  <h2 class="mx-auto mt-6 max-w-xl text-center text-lg text-white/60 antialiased">
    <p v-html="t('Product driven at core, <br> I\'m always eager to hear about your project <br> and find out in what way I can help you make it a reality.<br><br> Let\'s work, and ship a great product together!')" />
  </h2>

  <div class="mt-6 flex items-center rounded-full border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl">
    <span class="relative flex size-3">
      <span class="absolute inline-flex size-full animate-ping rounded-full bg-green-600/80 opacity-75" />
      <span class="relative inline-flex size-3 scale-90 rounded-full bg-green-500/80" />
    </span>
    <span class="ml-2 text-sm font-medium text-green-500/80">Available for new opportunities</span>
  </div>

  <div class="mt-10 gap-2 lg:flex">
    <AtButton
      class="mb-2 w-full"
      as="a"
      href="https://www.linkedin.com/in/bakary-sanou-61027b66/"
      target="_blank"
    >
      <div class="relative flex items-center justify-center gap-2 transition-all duration-200">
        Let's chat
        <MessageCircleMore
          class="text-white/80"
          aria-hidden="true"
        />
      </div>
    </AtButton>

    <Dialog>
      <DialogTrigger class="w-full">
        <AtButton
          class="mb-2 w-full"
          as="button"
          @click="showCalendly"
        >
          <div class="relative flex items-center justify-center gap-2 transition-all duration-200 ">
            Let's meet
            <Calendar
              class="text-white/80"
              aria-hidden="true"
            />
          </div>
        </AtButton>
      </DialogTrigger>
      <DialogContent class="h-[calc(100%-150px)] w-1/2 overflow-hidden rounded bg-white p-0">
        <!-- Calendly inline widget begin -->
        <div
          class="calendly-inline-widget size-full rounded"
          data-url="https://calendly.com/var-bsan/30min"
        />
        <!-- Calendly inline widget end -->
      </DialogContent>
    </Dialog>
  </div>

  <section class="my-10 w-full justify-start px-4 text-white/60 antialiased lg:w-1/2">
    <AtPageSubTitle>
      <template #default>
        Frequently Asked Questions
      </template>
    </AtPageSubTitle>
    <MlAccordion
      :items="faqItems"
      :default-value="faqItems[0].value"
    />
  </section>
</template>
