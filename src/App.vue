<script setup lang="ts">
import MlNavBar from '@/components/molecules/MlNavBar.vue'
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AtIconGithub from './components/atoms/icons/AtIconGithub.vue'
import AtIconLinkedin from './components/atoms/icons/AtIconLinkedin.vue'

const { t } = useI18n()
const { locale } = useI18n({ useScope: 'global' })
locale.value = window.localStorage.getItem('bakarydev-locale') ?? 'en'
watch(locale, () => {
  window.localStorage.setItem('bakarydev-locale', locale.value)
})
</script>

<template>
  <UApp>
    <div class="flex flex-col h-dvh">
      <main class="grid place-items-center dark text-foreground">
        <div class="sticky top-0 z-20 flex w-full justify-center bg-black">
          <ToggleGroupRoot
            v-model="locale" type="single" size="xs"
            class="absolute left-0 top-0 ml-6 mt-5.5 flex gap-1  text-xs text-white/50 bg-black rounded-md"
          >
            <ToggleGroupItem
              value="en" aria-label="Toggle english translation" class="text-xs font-light cursor-pointer"
              :class="{ 'text-white': locale === 'en' }"
            >
              EN
            </ToggleGroupItem>
            <ToggleGroupItem
              value="fr" aria-label="Toggle french translation" class="text-xs font-light cursor-pointer"
              :class="{ 'text-white': locale === 'fr' }"
            >
              FR
            </ToggleGroupItem>
          </ToggleGroupRoot>
          <MlNavBar class="my-2" />
          <div class="absolute right-0 top-0 mr-6 mt-4.5 flex gap-1 bg-zinc-950 rounded">
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
        class="dark mx-auto mt-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-6 text-center text-sm text-white/30"
      >
        © 2025, bakary.dev - {{ t('All rights reserved') }}.
      </footer>
    </div>
  </UApp>
</template>
