<script setup lang="ts">
import type { TechKey } from '@/lib/techStack'
import AtPageSubTitle from '@/components/atoms/AtPageSubTitle.vue'
import MlIconTech from '@/components/molecules/MlIconTech.vue'
import { techStack as libTechStack } from '@/lib/techStack'
import { computed } from 'vue'

export interface Experience {
  id: string
  title: string
  companyLink: string
  companyName: string
  timeframe: string
  description: string
  techStack: TechKey[]
  imageLink: string
  imageAlt: string
}
const props = defineProps<Experience>()

const experienceTechStack = computed(() => props.techStack
  .map(techName => libTechStack.find(tech => tech.name === techName))
  .filter(tech => !!tech),
)
</script>

<template>
  <div class="text-white/60 antialiased">
    <AtPageSubTitle>
      <template #default>
        {{ props.title }}
      </template>
    </AtPageSubTitle>
    <h3 class="mb-2 flex w-full justify-between">
      <span class="font-medium">
        @ <a
          :href="props.companyLink"
          target="_blank"
          class="hover:underline"
        >{{ companyName }}</a>
      </span>
      <span>
        {{ props.timeframe }}
      </span>
    </h3>
    <div class="mb-2">
      <p class="text-sm">
        {{ props.description }}
      </p>
    </div>
    <img
      :src="props.imageLink"
      :alt="props.imageAlt"
      class="h-96 w-full rounded-md object-cover object-left-top"
    >
    <div class="flex flex-wrap gap-2 mt-2">
      <MlIconTech
        v-for="tech in experienceTechStack"
        v-bind="tech"
        :key="tech.name"
        size="sm"
      />
    </div>
  </div>
</template>
