<script setup lang="ts">
  import type { TMovieResult } from '~/types/movies';
  import type { MediaCard } from '~/types/basic';
  import { ImageBaseUrl, PosterSizes } from '~/utils/constants';  

  const { media } = defineProps<{ media: MediaCard }>()
  const url = `${ImageBaseUrl}${PosterSizes.w780}${media.poster}`
</script>

<template>
  <div class="card">
    <div class="card--image">
      <NuxtImg 
        width="300" 
        height="500" 
        format="webp" 
        :src="url" 
        :alt="media.title"
      />
    </div>
    <NuxtLink class="card--link" :to="media.link">{{ media.title }}</NuxtLink>
    <div v-if="media.rating" class="card--rating">
      <BaseRating :value="media.rating"/>
      {{ media.rating }}
    </div>
  </div>
</template>

<style>

</style>