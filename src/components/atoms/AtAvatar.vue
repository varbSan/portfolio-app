<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink
    :to="{ name: 'About' }"
    class="avatar-wrapper"
  >
    <img
      src="@/assets/profile_picture.jpg"
      class="avatar size-36 overflow-hidden rounded-full border border-white/80 object-cover"
      alt="Avatar"
    >
    <div class="border-circle" />
  </RouterLink>
</template>

<style>
.avatar-wrapper {
  position: relative;
  display: inline-block;
  margin: 1em;
}

.avatar {
  will-change: filter;
  transition: filter 300ms;
  position: relative;
  z-index: 1;
}

.border-circle {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: none;
  pointer-events: none;
}

.avatar-wrapper:hover .border-circle {
  animation: rotate 2s linear infinite;
  background: linear-gradient(45deg,
    #000000, /* Pure black */
    #fff, /* Gold */
    #000000  /* Pure black */
  ) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
