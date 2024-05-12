<script setup lang="ts">
  import '@/assets/components/main-movie.css'
  import { ImageBaseUrl, BackdropSizes } from '~/utils/constants';  
  import { formatRatingNumber, generateHumanLink } from '~/utils/functions'

  import type { TMovieResult } from '~/types/movies';

  type Props = { poster: TMovieResult, showMoreButton?: boolean }

  const { poster, showMoreButton } = withDefaults(defineProps<Props>(), { showMoreButton: false })

  const url = `${ImageBaseUrl}${BackdropSizes.original}${poster.backdrop_path}`

</script>

<template>
  <div class="main-poster">
    <div class="main-poster--image">
      <nuxt-img  
        width="1220"
        height="659"
        sizes="100vw sm:50vw md:400px"
        format="webp" 
        class="main-poser--backdrop" 
        :key="url" 
        :alt="poster.original_title" 
        :src="url" 
      />
    </div>
    <div class="main-poster--content">
      <h1 class="main-poster--content-title">{{ poster.title || poster.original_title}}</h1>      
      <ul class="main-poster--content-info">
        <li>
           <BaseRating v-if="poster.vote_average" :value="formatRatingNumber(poster.vote_average)"/> {{ formatRatingNumber(poster.vote_average) }}
        </li>
        <li>
          {{ poster.vote_count }} reviews
        </li>
        <li>
          {{ poster.release_date }}
        </li>
      </ul>
      <p class="main-poster--content-overview">{{ poster.overview }}</p>
      <NuxtLink :to="generateHumanLink(poster.original_title, poster.id)"> 
        <BaseButton v-if="showMoreButton">
          {{ $t('buttons.review') }}
        </BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>