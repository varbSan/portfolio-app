<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
  name: route.name?.toString() as string,
  label: route.meta.label,
  icon: getIcon(route.name?.toString()),
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
  <Tabs
    v-model="currentRouteName"
    :default-value="routes[0].name"
    class="sticky flex w-56 sm:w-64 justify-center"
  >
    <TabsList class="flex w-[90%] justify-between rounded-full border border-white/80 bg-zinc-950 transition-all duration-200 ease-in-out hover:w-full">
      <RouterLink
        v-for="route in routes"
        :key="route.name"
        :to="{ name: route.name }"
        :title="route.label"
      >
        <TabsTrigger
          :value="route.name"
          class="rounded-full transition-all duration-200 ease-in-out cursor-pointer"
        >
          <component
            :is="route.icon"
            :size="24"
            class="hover:text-white"
          />
        </TabsTrigger>
      </RouterLink>
    </TabsList>
  </Tabs>
</template>
