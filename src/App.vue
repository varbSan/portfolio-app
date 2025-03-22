<script setup lang="ts">
import MlNavBar from '@/components/molecules/MlNavBar.vue'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AtIconGithub from './components/atoms/icons/AtIconGithub.vue'
import AtIconLinkedin from './components/atoms/icons/AtIconLinkedin.vue'

const { t } = useI18n()
const { locale } = useI18n({ useScope: 'global' })
const localeItems = ref([
  {
    label: 'EN',
    value: 'en'
  },
  {
    label: 'FR',
    value: 'fr'
  }
])
locale.value = window.localStorage.getItem('bakarydev-locale') ?? 'en'
watch(locale, () => {
  window.localStorage.setItem('bakarydev-locale', locale.value)
})

</script>

<template>
  <UApp class="flex h-dvh flex-col dark text-foreground">
    <main class="grid place-items-center">
      <div class="sticky top-0 z-20 flex w-full justify-center">
        <UTabs v-model="locale" size="xs" color="neutral" variant="pill" :content="false" :items="localeItems" class="absolute left-0 top-0 ml-4 mt-4 w-20" />
        <MlNavBar class="my-2" />
        <div class="absolute right-0 top-0 mr-4 mt-4 flex gap-1 bg-zinc-950 rounded">
          <a href="https://github.com/varbSan" target="_blank" title="github">
            <AtIconGithub class="size-6 cursor-pointer text-white/50 hover:text-white/80" />
          </a>
          <a href="https://www.linkedin.com/in/bakary-sanou-61027b66/" target="_blank" title="linkedin">
            <AtIconLinkedin class="size-6 cursor-pointer text-white/50 hover:text-white/80" />
          </a>
        </div>
      </div>
      <RouterView />
    </main>
    <footer
      class="mx-auto mt-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-6 text-center text-sm text-white/30">
      © 2024, bakary.dev - {{ t('All rights reserved') }}.
    </footer>
  </UApp>
</template>
