<script setup lang="ts">
import {defineProps, ref} from 'vue';

const props = defineProps({
  href: {
    default: 'https://embeddable.vercel.app/',
  },
});

const counter = ref(props.count);
</script>

<template>
  <a target="_blank" :href="href">
    <div
      flex="~"
      p="2"
      hover="border-blue-600 text-blue-600"
      transition="duration-200"
      cursor="pointer"
      w="max-content"
      text="sm"
      border="~ gray-400 opacity-50 rounded-md"
    >
      Open playground
    </div>
  </a>
</template>

<style></style>
