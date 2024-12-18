<script setup lang="ts">
import type { TechKey } from './lib/techStack'
import MlNavBar from '@/components/molecules/MlNavBar.vue'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { provide, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AtIconGithub from './components/atoms/icons/AtIconGithub.vue'
import AtIconLinkedin from './components/atoms/icons/AtIconLinkedin.vue'
import { techStack } from './lib/techStack'

const currentTechStackKeys: TechKey[] = [
  'typescript',
  'tauri',
  'tailwind',
  'vuejs',
  'vite',
  'graphql',
  'nestjs',
  'drizzle',
  'postgresql',
  'github',
  'railway',
]
const currentTechStack = techStack.filter(tech => currentTechStackKeys.includes(tech.key))

provide<typeof currentTechStack>('currentTechStack', currentTechStack)

const { t } = useI18n()
const { locale } = useI18n({ useScope: 'global' })
locale.value = window.localStorage.getItem('bakarydev-language') ?? 'en'
watch(locale, () => {
  window.localStorage.setItem('bakarydev-language', locale.value)
})
</script>

<template>
  <div class="flex h-dvh flex-col">
    <main class="grid place-items-center">
      <div class="sticky top-0 z-20 flex w-full justify-center">
        <ToggleGroup v-model="locale" type="single" size="xs" class="absolute left-0 top-0 ml-4 mt-4 flex gap-1  text-white/50">
          <!-- <ToggleGroupItem value="de" aria-label="Toggle german translation">
            DE
          </ToggleGroupItem> -->
          <ToggleGroupItem value="en" aria-label="Toggle english translation" class="font-light">
            EN
          </ToggleGroupItem>
          <ToggleGroupItem value="fr" aria-label="Toggle french translation" class="font-light">
            FR
          </ToggleGroupItem>
        </ToggleGroup>
        <MlNavBar class="my-2" />
        <div class="absolute right-0 top-0 mr-4 mt-4 flex gap-1">
          <a
            href="https://github.com/varbSan"
            target="_blank"
            title="github"
          >
            <AtIconGithub class="size-6 cursor-pointer text-white/50 hover:text-white/80" />
          </a>
          <a
            href="https://github.com/varbSan"
            target="_blank"
            title="linkedin"
          >
            <AtIconLinkedin class="size-6 cursor-pointer text-white/50 hover:text-white/80" />
          </a>
        </div>
      </div>
      <RouterView />
    </main>
    <footer class="mx-auto mt-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-6 text-center text-sm text-white/30">
      © 2024, Bakary.dev - {{ t('All rights reserved') }}.
    </footer>
  </div>
</template>
