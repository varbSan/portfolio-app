<script setup lang="ts">
import type { Tech, TechKey } from '@/lib/techStack'
import AtPageTitle from '@/components/atoms/AtPageTitle.vue'
import MlIconTech from '@/components/molecules/MlIconTech.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { techStack } from '@/lib/techStack'

type Project = {
  key: string
  title: string
  description: string
  techStack: Tech[]
}
const projects: Project[] = [
  {
    key: 'jestin',
    title: 'Jestin',
    description: 'WIP',
    techStack: techStack.filter(tech => ([
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
    ] as TechKey[]).includes(tech.key)),
  },
  {
    key: 'ochess',
    title: 'oChess',
    description: 'WIP',
    techStack: techStack.filter(tech => ([
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
    ] as TechKey[]).includes(tech.key)),
  },
  {
    key: 'tradecitizen',
    title: 'Trade Citizen',
    description: 'WIP',
    techStack: techStack.filter(tech => ([
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
    ] as TechKey[]).includes(tech.key)),
  },
  {
    key: 'diamonds',
    title: 'Diamonds',
    description: 'WIP',
    techStack: techStack.filter(tech => ([
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
    ] as TechKey[]).includes(tech.key)),
  },
]

</script>

<template>
  <AtPageTitle />
  <section class="mt-6 grid w-full grid-cols-2 gap-4 px-6 md:w-4/5 lg:w-3/4 xl:w-2/3">
    <Card
      v-for="project in projects"
      :key="project.key"
      class="col-span-2 w-full lg:col-span-1"
    >
      <CardHeader>
        <CardTitle> {{ project.title }} </CardTitle>
        <CardDescription>
          <div class="mb-2">
            <p class="text-sm">
              {{ project.description }}
            </p>
            <MlIconTech
              v-for="tech in project.techStack"
              v-bind="tech"
              :key="tech.key"
              class="flex w-full"
              size="sm"
            />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent
      >
        <div class="overflow-hidden h-64 border-white/80 rounded border">
          <a href="https://example.com" target="_blank">
            <img
              src="https://solytic.com/wp-content/uploads/2021/03/Solytic-Monitoring-site-1.png"
              class="h-64 w-full overflow-hidden object-cover object-left-top transition-all duration-200 ease-in-out hover:scale-105"
              alt="Project image"
            >
          </a>
        </div>
      </CardContent>
    </Card>
  </section>
</template>
