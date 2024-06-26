<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { computed, ref, watch } from 'vue'
  import { movieTabs } from '~/utils/constants'
  import { generateHumanLink, formatRatingNumber } from '~/utils/functions'

  import type { ComputedRef, Ref } from 'vue'
  import type { FetchPopularMovie, TMovieResult } from '~/types/movies';

  const route = useRoute()
  const config = useRuntimeConfig()
  const { locale, t } = useI18n()

  const tab: ComputedRef<string> = computed(() => String(route.params.category))

  const page: Ref<number> = ref(1)
  const items: Ref<TMovieResult[]> = ref([])

  if(!movieTabs.includes(tab.value)) {
    throw createError({ status: 404, message: "Page not found" })
  }

  const loadClientData = async (): Promise<FetchPopularMovie> => {
    const res = await $fetch<FetchPopularMovie>(`${config.public.baseURL}/movie/${tab.value}`, {
      headers: {
        Authorization: `Bearer ${config.public.apiKey}`
      },
      params: { language: locale.value, page: page.value }
    })

    return res
  }

  const { data: movies } = await useTheFetch<FetchPopularMovie>(`/movie/${tab.value}`, {
    lazy: true, 
    params: { language: locale.value },
    watch: [ tab ]
  })

  items.value = movies.value?.results || []

  watch(
    () => tab.value,
    () => {
      items.value = []
      page.value = 1
    }
  )

  const load = async () => {
    page.value++
    if(page.value === movies.value?.total_pages || tab.value === 'undefined') {
      return
    }
    const res = await loadClientData()
    items.value = [...items.value, ...res.results]

  }

  useHead({ title: t(`tabs.${tab.value}`) })


</script>

<template>
  <div class="base-page">
    <BaseTabs :tabs="movieTabs" :selected="tab" base-link="movies/category"/>
    <BaseInfiniteScroll @load="load">
      <div class="base-page--cards">        
        <template v-for="movie of items" :key="movie.id">
          <MediaCard 
            :media="{ 
              poster: movie.poster_path, 
              title: movie.title || movie.original_title, 
              rating:  formatRatingNumber(movie.vote_average),
              link: `/movies/${generateHumanLink(movie.title, movie.id)}` 
            }"
          />
        </template>
      </div>
    </BaseInfiniteScroll>
  </div>
</template>