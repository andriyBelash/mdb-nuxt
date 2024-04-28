<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="error" v-if="error">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink class="primary-button" to="/">Go back home</NuxtLink>
  </div>
</template>

<style>
.error{
  color: var(--color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 12px;
}
.error h1{
  font-size: 112px;
}

.error .primary-button{
  color: var(--color-primary);
  margin-top: 12px;
}

</style>