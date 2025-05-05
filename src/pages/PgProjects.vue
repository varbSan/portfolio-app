<script setup lang="ts">
import type { Tech, TechKey } from '@/lib/techStack'
import AtPageTitle from '@/components/atoms/AtPageTitle.vue'
import MlIconTech from '@/components/molecules/MlIconTech.vue'
import { techStack } from '@/lib/techStack'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Project {
  name: string
  title: string
  description: string
  imageSrc: string
  link?: string
  techStack: Tech[]
}
const projects = computed<Project[]>(() => [
  {
    name: 'bergline',
    title: 'Bergline',
    description: t('A nightclub queueing web application.'),
    imageSrc: '../bergline.jpg',
    link: 'https://bergline.bakary.dev',
    techStack: techStack.filter((tech) => {
      const keys: TechKey[] = [
        'typescript',
        'tailwind',
        'vuejs',
        'vite',
        'graphql',
        'nestjs',
        'mikroorm',
        'postgresql',
        'github',
        'coolify',
        'hetzner',
      ]
      return keys.includes(tech.name)
    }),
  },
  {
    name: 'quote-record',
    title: 'Quote Record',
    description: t('A cross-platform app for daily inspiration. Get a quote with an AI-generated matching background each day. Insert your own custom quotes database.'),
    imageSrc: '../quote-record.jpg',
    link: 'https://quote-record.bakary.dev',
    techStack: techStack.filter((tech) => {
      const keys: TechKey[] = [
        'typescript',
        'tauri',
        'tailwind',
        'vuejs',
        'vite',
        'graphql',
        'nestjs',
        'mikroorm',
        'postgresql',
        'github',
        'coolify',
        'hetzner',
      ]
      return keys.includes(tech.name)
    }),
  },
])
</script>

<template>
  <AtPageTitle />
  <section class="mt-6 grid w-full grid-cols-2 gap-4 px-6 md:w-4/5 lg:w-3/4 xl:w-2/3">
    <UCard
      v-for="project in projects"
      :key="project.name"
      variant="subtle"
      class="col-span-2 lg:col-span-1"
    >
      <h4 class="font-bold">
        {{ project.title }}
      </h4>
      <div class="antialiased">
        <div class="mb-1 h-64 overflow-hidden rounded border border-white/50">
          <a :href="project.link" target="_blank">
            <img
              :src="project.imageSrc"
              class="h-64 w-full overflow-hidden transition-all duration-200 ease-in-out hover:scale-105"
              alt="Project image"
            >
          </a>
        </div>
        <p class="text-sm text-white/60 antialiased">
          {{ project.description }}
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <MlIconTech
          v-for="tech in project.techStack"
          v-bind="tech"
          :key="tech.name"
          size="sm"
        />
      </div>
    </UCard>
  </section>
</template>
