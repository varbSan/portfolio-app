<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export type Item = {
  value: string
  title: string
  content: string
}

const props = defineProps<{
  defaultValue: string
  items: Item[]
}>()
</script>

<template>
  <Accordion
    type="single"
    class="w-full"
    collapsible
    :default-value="props.defaultValue"
  >
    <AccordionItem
      v-for="item in props.items"
      :key="item.value"
      :value="item.value"
    >
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
