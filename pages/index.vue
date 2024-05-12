<script setup lang="ts">
import type { FetchPopularMovie, TMovieResult } from '~/types/movies';

const { locale } = useI18n()

const { data, error } = await useTheFetch<FetchPopularMovie>('/trending/movie/day', { 
  params: { language: locale.value }
 })

const randomMovie: ComputedRef<TMovieResult | undefined> = computed(() => {
  return data.value?.results[0]
})

</script>

<template>
  <MovieMainPoster v-if="randomMovie" show-more-button :poster="randomMovie"/>
</template>