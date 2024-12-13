<script setup lang="ts">
import type { Tech, TechKey } from '@/lib/techStack'
import AtPageTitle from '@/components/atoms/AtPageTitle.vue'
import MlIconTech from '@/components/molecules/MlIconTech.vue'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { techStack } from '@/lib/techStack'

type Project = {
  key: string
  title: string
  description: string
  imageSrc: string
  techStack: Tech[]
}
const projects: Project[] = [
  // {
  //   key: 'bobottle',
  //   title: 'Bobottle',
  //   description: 'An Uber like app for recycling. Give away your empty bottle. Help someone who will make money from it.',
  //   imageSrc: 'https://as1.ftcdn.net/v2/jpg/02/33/17/50/1000_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
  //   techStack: techStack.filter((tech) => {
  //     const keys: TechKey[] = [
  //       'typescript',
  //       'rust',
  //       'tauri',
  //       'tailwind',
  //       'vuejs',
  //       'vite',
  //       'graphql',
  //       'actix',
  //       'postgresql',
  //       'github',
  //       'railway',
  //     ]
  //     return keys.includes(tech.key)
  //   }),
  // },
  {
    key: 'tradecitizen',
    title: 'Trade Citizen',
    description: 'A minimal and live trade monitoring tool.',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/02/33/17/50/1000_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
    techStack: techStack.filter(tech => ([
      'typescript',
      'rust',
      'tauri',
      'tailwind',
      'vuejs',
      'vite',
      'github',
    ] as TechKey[]).includes(tech.key)),
  },
  {
    key: 'berghail',
    title: 'Berghail',
    description: 'A 2D game about Techno, g-heads, and Anja.',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/02/33/17/50/1000_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
    techStack: techStack.filter((tech) => {
      const keys: TechKey[] = [
        'typescript',
        'rust',
        'bevy',
        'webassembly',
        'vite',
        'vercel',
        'github',
      ]
      return keys.includes(tech.key)
    }),
  },
  {
    key: 'jestin',
    title: 'Jestin',
    description: 'A learning tool for process heavy jobs. Empower your employees with space repetition and active recall so they know what they have to do by heart.',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/02/33/17/50/1000_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
    techStack: techStack.filter((tech) => {
      const keys: TechKey[] = [
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
      return keys.includes(tech.key)
    }),
  },
  {
    key: 'ochess',
    title: 'oChess',
    description: 'A chess app.',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/02/33/17/50/1000_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
    techStack: techStack.filter((tech) => {
      const keys: TechKey[] = [
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
      return keys.includes(tech.key)
    }),
  },
  {
    key: 'diamonds',
    title: 'Diamonds',
    description: 'A mobile app to remind yourself your inspirations. Insert your quotes and mantras. Get one a day with an AI generated matching background.',
    imageSrc: 'https://as1.ftcdn.net/v2/jpg/02/33/17/50/1000_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg',
    techStack: techStack.filter((tech) => {
      const keys: TechKey[] = [
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
      return keys.includes(tech.key)
    }),
  },
]
</script>

<template>
  <AtPageTitle />
  <section class="mt-6 grid w-full grid-cols-2 gap-4 px-6 md:w-4/5 lg:w-3/4 xl:w-2/3">
    <Card
      v-for="project in projects"
      :key="project.key"
      class="col-span-2 flex size-full flex-col justify-between lg:col-span-1"
    >
      <CardHeader class="antialiased">
        <CardTitle> {{ project.title }} </CardTitle>
        <div class="flex">
          <MlIconTech
            v-for="tech in project.techStack"
            v-bind="tech"
            :key="tech.key"
            class="flex w-full"
            size="xs"
          />
        </div>
        <div class="mb-1 h-64 overflow-hidden rounded border border-white/80">
          <a href="https://example.com" target="_blank">
            <img
              :src="project.imageSrc"
              class="h-64 w-full overflow-hidden object-cover object-left-top transition-all duration-200 ease-in-out hover:scale-105"
              alt="Project image"
            >
          </a>
        </div>
        <CardDescription>
          <p class="text-sm text-white/60 antialiased">
            {{ project.description }}
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  </section>
</template>
