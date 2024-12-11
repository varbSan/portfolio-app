<script setup lang="ts">
import { Button } from '../ui/button'
</script>

<template>
  <Button class="group relative inline-flex items-center overflow-hidden rounded-md bg-zinc-800 px-8 py-1 transition">
    <div class="absolute inset-0 flex items-center [container-type:inline-size]">
      <div class="absolute size-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-1000 group-hover:opacity-100" />
    </div>
    <div class="absolute inset-px rounded-md bg-zinc-900 sm:bg-zinc-900/80 sm:backdrop-blur-md" />
    <div class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-md bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100" />
    <slot />
  </Button>
</template>
