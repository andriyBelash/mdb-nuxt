<script setup lang="ts">
  import '@/assets/components/sidebar.css'

  const localePath = useLocalePath()
  
</script>

<template>
  <div class="sidebar">
    <nuxt-link :to="localePath('/')">
      <IconHome></IconHome>
    </nuxt-link>
    <nuxt-link :to="localePath('/movies/category/popular')">
      <IconMovie></IconMovie>
    </nuxt-link>
    <nuxt-link :to="localePath('/tv/category/airing_today')">
      <IconTV></IconTV>
    </nuxt-link>
    <nuxt-link :to="localePath('/search')">
      <IconSearch></IconSearch>
    </nuxt-link>
  </div>
</template>