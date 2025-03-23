<script setup lang="ts">
import type { TechKey } from '@/lib/techStack'
import AtPageSubTitle from '@/components/atoms/AtPageSubTitle.vue'
import AtPageTitle from '@/components/atoms/AtPageTitle.vue'
import MlContacts from '@/components/molecules/MlContacts.vue'
import MlIconTech from '@/components/molecules/MlIconTech.vue'
import { techStack } from '@/lib/techStack'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentTechStack = techStack.filter(tech => ([
  'typescript',
  'tauri',
  'tailwind',
  'vuejs',
  'vite',
  'graphql',
  'nestjs',
  'mikroorm',
  'postgresql',
  'coolify',
  'hetzner',
  'github',
] as TechKey[]).includes(tech.name))
</script>

<template>
  <AtPageTitle />
  <section class="mt-6 grid  w-full gap-4 px-6 text-white/60 antialiased md:w-2/3 lg:grid-cols-3">
    <AtPageSubTitle class="col-span-3">
      {{ t('Who I am') }}
    </AtPageSubTitle>
    <img
      src="@/assets/profile_picture.jpg"
      class="col-span-3 aspect-square w-full overflow-hidden rounded border border-white/80 object-cover sm:col-span-1"
      alt="Avatar"
    >
    <p
      class="col-span-3 sm:col-span-2"
      v-html="t('Fullstack Developer based in Berlin, Germany<br>I enjoy blending technology and innovative ideas to create unique, bespoke application that exceed my clients expectations.<br><br>Whether collaborating with teams or leading a projects, my attention to detail and dedication to excellence have earned me a reputation for delivering exceptional results.<br><br>Even when I\'m not working for my clients, I\'m always looking for new things to learn and experiment with. I continue to develop my design and development skills by working on personal projects.<br>')"
    />
  </section>
  <section class="mt-6 gap-4 px-6 text-white/60 antialiased md:w-2/3">
    <AtPageSubTitle>
      Tech Stack
    </AtPageSubTitle>
    <div class="flex flex-wrap gap-4 mt-4">
      <MlIconTech
        v-for="tech in currentTechStack"
        v-bind="tech"
        :key="tech.name"
        class="flex w-full"
      />
    </div>
  </section>
  <section class="mt-6 grid w-full grid-cols-12 gap-4 px-6 text-white/60 antialiased md:w-2/3">
    <AtPageSubTitle class="col-span-12">
      {{ t('Social Media') }}
    </AtPageSubTitle>
    <MlContacts show-label />
  </section>
</template>
