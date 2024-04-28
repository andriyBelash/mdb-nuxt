<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div v-if="error">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>