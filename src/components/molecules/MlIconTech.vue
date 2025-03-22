<script setup lang="ts">
import type { Tech } from '@/lib/techStack'
import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
type Props = Tech & { size?: 'xs' | 'sm' | 'md' | 'lg' }
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})
</script>

<template>
  <TooltipProvider>
    <TooltipRoot class="">
      <TooltipTrigger class="transition-all duration-75 ease-in-out hover:rotate-6">
        <div class="relative grid w-fit place-items-center border-0 p-2">
          <a
            class="z-10"
            :href="props.link"
            target="_blank"
          >
            <component
              :is="props.icon"
              :class="{
                'size-4': props.size === 'xs',
                'size-6': props.size === 'sm',
                'size-12': props.size === 'md',
                'size-14': props.size === 'lg',
              }"
            />
          </a>
        </div>
      </TooltipTrigger>
      <TooltipContent class="text-white/80 border-white/80 self-start border bg-zinc-950/80 rounded p-2">
        <h4 class="text-xl">
          {{ props.title }}
        </h4>
        <p 
          class="w-40"
          :class="{
            'text-xs': props.size === 'xs' || props.size === 'sm',
            'text-sm': props.size === 'md' || props.size === 'lg',
          }"
        >
          {{ props.description }}
        </p>
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
