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
      <TooltipTrigger
        class="transition-all duration-75 ease-in-out hover:rotate-6"
        :class="{
          'mr-1.5 mt-1.5': props.size === 'xs',
          'mr-2 mt-2': props.size === 'sm',
          'mr-4 mt-4': props.size === 'md',
          'mr-5 mt-5': props.size === 'lg',
        }"
      >
        <Card class="bg-zinc relative grid w-fit place-items-center border-0 p-2">
          <div class="absolute inset-x-0 bottom-[--radius] top-0 rounded-t-[--radius] bg-gradient-to-b from-white/20 to-transparent" />
          <div class="absolute inset-x-[--radius] top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-950" />
          <div class="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]" />
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
      <TooltipContent class="text-silver/90 border-silver/90 self-start border bg-zinc-950/80">
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
