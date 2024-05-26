<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { computed, ref, watch } from 'vue'
  import { generateHumanLink, formatRatingNumber, debounce } from '~/utils/functions'

  import type { ComputedRef, Ref } from 'vue'
  import type { ISearchResult, FetchSearch } from '@/types/search'

  const route = useRoute()
  const router = useRouter()
  const config = useRuntimeConfig()
  const { locale, t } = useI18n()
  
  const search: ComputedRef = computed(() => String(route.query['search'] || ''))
  const page: Ref<number> = ref(1)
  const items: Ref<ISearchResult[]> = ref([])

  const loadClientData = async (): Promise<FetchSearch> => {
    const res = await $fetch<FetchSearch>(`${config.public.baseURL}/search/multi`, {
      headers: {
        Authorization: `Bearer ${config.public.apiKey}`
      },
      params: { language: locale.value, page: page.value, query: search.value }
    })

    return res
  }

  const { data: q } = await useTheFetch<FetchSearch>(`/search/multi`, {
    params: { language: locale.value, query: search.value },
    watch: [ search ]
  })
  items.value = q.value?.results || []

  const searchMedia = debounce((e: string) => {
    if(e) {
      router.replace({ name: 'search', query: { search: e } })
    } else {
      router.replace({ name: 'search' })
    }
  }, 200)

  const load = async () => {
    page.value++
    if(page.value === q.value?.total_pages) {
      return
    }
    const res = await loadClientData()
    items.value = [...items.value, ...res.results]
  }

  watch(
    () => search.value,
    async () => {
      page.value = 1
      const res = await loadClientData()
      items.value = res.results
    }
  )

  useHead({ title: t(`base.search`) })


</script>

<template>
  <div class="base-page search-page">
    <BaseInput
      :model-value="search"
      @update:model-value="searchMedia"
      :placeholder="t('base.search')"
    />
    <BaseInfiniteScroll @load="load">
      <div class="base-page--cards">
        <template v-for="item in items">
          <template v-if="['tv', 'movie'].includes(item.media_type)">
            <MediaCard 
              :media="{ 
                poster: String(item.poster_path || item.backdrop_path || item.profile_path), 
                title: String(item.name || item.title || item.original_title), 
                rating:  formatRatingNumber(Number(item.vote_average)),
                link: `/${item.media_type === 'movie' ? 'movies' : item.media_type}/${generateHumanLink(String(item.name || item.title || item.original_title), item.id)}` 
              }"
            />
          </template>
        </template>
      </div>
    </BaseInfiniteScroll>
  </div>
</template>

<style>
  .search-page{
    padding: 20px;
  }
</style>