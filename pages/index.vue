<script setup lang="ts">
import type { FetchPopularMovie } from '~/types/movies';
import type { FetchPopularTV } from '~/types/tv'
import type { Poster } from '~/types/basic';

import { generateHumanLink, formatRatingNumber } from '~/utils/functions'

const { locale } = useI18n()

const { data: movies } = await useTheFetch<FetchPopularMovie>('/movie/popular', { 
  params: { language: locale.value }
})
const { data: tv } = await useTheFetch<FetchPopularTV>('/tv/popular', { 
  params: { language: locale.value }
})

 const randomMovie: ComputedRef<Poster | undefined> = computed(() => {
  const movie = movies.value?.results[0]
  return movie ? { 
    id: movie.id, 
    backdrop_path: movie.backdrop_path, 
    title: movie.title, 
    original_title: movie.original_title, 
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    release_date: movie.release_date,
    overview: movie.overview
  } : undefined
})

useHead({ title: 'Home' })


</script>

<template>
  
    <MediaMainPoster 
      v-if="randomMovie" 
      show-more-button 
      :poster="randomMovie"
      :link="`/movies/${generateHumanLink(randomMovie.title, randomMovie.id)}`"
    />
    <div class="page-content">

      <BaseSection :title="$t('movies.popular')" url="/movies/category/popular">
        <template v-for="movie of movies?.results" :key="movie.id">
          <MediaCard 
            :media="{ 
              poster: movie.poster_path, 
              title: movie.title || movie.original_title, 
              rating:  formatRatingNumber(movie.vote_average),
              link: `/movies/${generateHumanLink(movie.title, movie.id)}` 
            }"
          />
        </template>
      </BaseSection>

      <BaseSection :title="$t('tv.popular')" url="#">
        <template v-for="item of tv?.results" :key="item.id">
          <MediaCard 
            :media="{ 
              poster: item.poster_path, 
              title: item.name || item.original_name, 
              rating:  formatRatingNumber(item.vote_average),
              link: `/tv/${generateHumanLink(item.name, item.id)}` 
            }"
          />
        </template>
      </BaseSection>
    </div>
</template>