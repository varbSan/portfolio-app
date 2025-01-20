<script setup lang="ts">
import AtPageTitle from '@/components/atoms/AtPageTitle.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TmExperience, { type Experience } from './TmExperience.vue'

const { t } = useI18n()

const experiences = computed<Experience[]>(() => [
  {
    id: 'codio-fullstack',
    title: t('Fullstack Developer'),
    companyLink: 'https://www.codioimpact.com/',
    companyName: 'Codio Impact GmbH',
    timeframe: '2022 - 2025',
    imageLink: 'https://cdn.prod.website-files.com/60e6f7d2de5acab2f159928a/64e7782b9edbd01439aef6d1_Management%20dashboard%20-%2020.svg',
    imageAlt: 'Codio Impact webapp admin dashboard',
    description: t('Build the front and the backend of a sustainability platform. Features: AI queries, Multiple Workspaces, Nested Datapoints (3 levels), Nested Projects, User Delegation, External data entry, Custom datatables.'),
    techStack: ['typescript', 'tailwind', 'vuejs', 'vite', 'graphql', 'nestjs', 'mongodb', 'docker', 'vercel', 'render', 'github'],
  },
  {
    id: 'solytic-frontend',
    title: t('Frontend Developer'),
    companyLink: 'https://solytic.com/',
    companyName: 'Solytic GmbH',
    timeframe: '2021 - 2022',
    imageLink: 'https://solytic.com/wp-content/uploads/2021/03/Solytic-Monitoring-site-1.png',
    imageAlt: 'Solytic webapp dashboard',
    description: t('Build the Frontend of a Solar Panel Monitoring SaaS'),
    techStack: ['typescript', 'sass', 'vuejs', 'cypress', 'webpack', 'graphql', 'microsoftazure'],
  },
])
</script>

<template>
  <AtPageTitle />
  <section class="mt-6 w-full px-6 md:w-2/3 lg:w-1/2 2xl:w-1/3">
    <TmExperience
      v-for="experience in experiences"
      :key="experience.id"
      v-bind="experience"
      class="mb-4"
    />
  </section>
</template>
