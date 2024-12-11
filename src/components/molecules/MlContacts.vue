<script setup lang="ts">
import AtIconGithub from '@/components/atoms/icons/AtIconGithub.vue'
import AtIconLinkedin from '../atoms/icons/AtIconLinkedin.vue'

const props = defineProps<{
  showLabel?: boolean
}>()

const contacts = [
  {
    name: 'github',
    label: 'Github',
    url: 'https://github.com/varbSan',
    icon: AtIconGithub,
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bakary-sanou-61027b66/',
    icon: AtIconLinkedin,
  },

]
</script>

<template>
  <div class="flex gap-2">
    <a
      v-for="contact in contacts"
      :key="contact.name"
      :href="contact.url"
      :title="contact.label"
      target="_blank"
      class="flex items-center text-white/80 transition-all duration-300 ease-in-out hover:text-white"
    >
      <component
        :is="contact.icon"
        class="size-8"
      />
      <span
        v-if="props.showLabel"
        class="ml-1"
      >{{ contact.label }}</span>
    </a>
  </div>
</template>
