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
  frontendCodeLink?: string
  backendCodeLink?: string
  techStack: Tech[]
}
const projects = computed<Project[]>(() => [
  {
    name: 'bergline',
    title: 'Bergline',
    description: t('A nightclub queueing web application.'),
    imageSrc: '../bergline.jpg',
    link: 'https://bergline.bakary.dev',
    frontendCodeLink: 'https://github.com/varbSan/berline-client',
    backendCodeLink: 'https://github.com/varbSan/berline-server',
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
    description: t('A cross-platform app (web and macOS) that converts quotes into inspiring images.'),
    imageSrc: '../quote-record.jpg',
    link: 'https://quote-record.bakary.dev',
    frontendCodeLink: 'https://github.com/varbSan/quote-record-client',
    backendCodeLink: 'https://github.com/varbSan/quote-record-server',
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
      <h4 class="flex mb-1 align-bottom">
        <ULink
          class="text-white/70 font-bold"
          :to="project.link"
          target="_blank"
        >
          {{ project.title }}
        </ULink>
        <UButtonGroup class="ml-auto" size="xs">
          <UButton icon="i-lucide-code" color="neutral" variant="outline" label="Code" />

          <UDropdownMenu
            size="xs"
            :ui="{
              content: 'min-w-20 bg-zinc-950/80 ring-white/50',
              group: 'p-1.5 outline-none border-0',
              itemLabel: 'text-white/80',
              item: '!bg-zinc-950/80',
            }"
            :items="[
              {
                label: 'Frontend',
                target: '_blank',
                to: project.frontendCodeLink,
              },
              {
                label: 'Backend',
                target: '_blank',
                to: project.backendCodeLink,
              },
            ]"
          >
            <UButton
              size="xs"
              color="neutral"
              variant="outline"
              icon="i-lucide-chevron-down"
              class="cursor-pointer"
            />
          </UDropdownMenu>
        </UButtonGroup>
      </h4>
      <div class="antialiased">
        <div class="mb-1 h-64 overflow-hidden rounded border border-white/50">
          <a :href="project.link" target="_blank">
            <img
              :src="project.imageSrc"
              class="h-64 w-full overflow-hidden object-cover  transition-all duration-200 ease-in-out hover:scale-105"
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
