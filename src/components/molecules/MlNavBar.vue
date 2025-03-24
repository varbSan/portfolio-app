<script setup lang="ts">
import { Briefcase, Home, Info, Pickaxe, User } from 'lucide-vue-next'
import { computed, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const currentRoute = useRoute()
const router = useRouter()
const currentRouteName = ref(currentRoute.name?.toString())
watchEffect(() => {
  currentRouteName.value = currentRoute.name?.toString()
})

const routes = computed(() => router.getRoutes().map(route => ({
  value: route.name?.toString() as string,
})))

function getIcon(routeName?: string) {
  switch (routeName) {
    case 'Home': return Home
    case 'Experiences': return Briefcase
    case 'Projects': return Pickaxe
    case 'Information': return Info
    case 'About': return User
    default: return Home
  }
}
</script>

<template>
  <UTabs
    :items="routes"
    variant="link"
    @update:model-value="router.push({ name: $event as string })"
  >
    <template #default="{ item }">
      <component
        :is="getIcon(item.value)"
        :size="24"
        class="cursor-pointer"
        :class="{
          'text-(--ui-primary)': item.value === currentRoute.name?.toString(),
        }"
      />
    </template>
  </UTabs>
</template>
