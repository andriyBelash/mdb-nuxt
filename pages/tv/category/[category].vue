<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { computed, ref, watch } from 'vue'
  import { tvTabs } from '~/utils/constants'
  import { generateHumanLink, formatRatingNumber } from '~/utils/functions'

  import type { ComputedRef, Ref } from 'vue'
  import type { FetchPopularTV, ITVResult } from '~/types/tv';

  const route = useRoute()
  const config = useRuntimeConfig()
  const { locale, t } = useI18n()

  const tab: ComputedRef<string> = computed(() => String(route.params.category))

  const page: Ref<number> = ref(1)
  const items: Ref<ITVResult[]> = ref([])

  if(!tvTabs.includes(tab.value)) {
    throw createError({ status: 404, message: "Page not found" })
  }

  const loadClientData = async (): Promise<FetchPopularTV> => {
    const res = await $fetch<FetchPopularTV>(`${config.public.baseURL}/tv/${tab.value}`, {
      headers: {
        Authorization: `Bearer ${config.public.apiKey}`
      },
      params: { language: locale.value, page: page.value }
    })

    return res
  }

  const { data: tv } = await useTheFetch<FetchPopularTV>(`/tv/${tab.value}`, {
    params: { language: locale.value },
    watch: [ tab ]
  })

  items.value = tv.value?.results || []

  watch(
    () => tab.value,
    () => {
      items.value = []
      page.value = 1
    }
  )

  const load = async () => {
    page.value++
    if(page.value === tv.value?.total_pages || tab.value === 'undefined') {
      return
    }
    const res = await loadClientData()
    items.value = [...items.value, ...res.results]

  }

  useHead({ title: t(`tabs.${tab.value}`) })

</script>

<template>
  <div class="base-page">
    <BaseTabs :tabs="tvTabs" :selected="tab" base-link="tv/category"/>
    <BaseInfiniteScroll @load="load">
      <div class="base-page--cards">        
        <template v-for="movie of items" :key="movie.id">
          <MediaCard 
            :media="{ 
              poster: movie.poster_path, 
              title: movie.name, 
              rating:  formatRatingNumber(movie.vote_average),
              link: `/tv/${generateHumanLink(movie.name, movie.id)}` 
            }"
          />
        </template>
      </div>
    </BaseInfiniteScroll>
  </div>
</template>