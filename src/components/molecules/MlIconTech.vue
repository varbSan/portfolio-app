<script setup lang="ts">
import type { Tech } from '@/lib/techStack'
import { Card } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

type Props = Tech & { size?: 'xs' | 'sm' | 'md' | 'lg' }
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger class="transition-all duration-75 ease-in-out hover:rotate-6">
        <Card class="relative grid w-fit place-items-center border-0 p-2">
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
        </Card>
      </TooltipTrigger>
      <TooltipContent class="text-white/80 border-white/80 self-start border bg-zinc-950/80">
        <h4 class="text-xl">
          {{ props.title }}
        </h4>
        <p class="w-40">
          {{ props.description }}
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
