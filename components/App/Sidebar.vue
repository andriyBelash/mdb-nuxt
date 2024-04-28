<script setup lang="ts">
  import '@/assets/components/sidebar.css'
</script>

<template>
  <div class="sidebar">
    <nuxt-link to="/">
      <IconHome></IconHome>
    </nuxt-link>
    <nuxt-link to="#">
      <IconMovie></IconMovie>
    </nuxt-link>
    <nuxt-link to="#">
      <IconTV></IconTV>
    </nuxt-link>
    <nuxt-link to="#">
      <IconPerson></IconPerson>
    </nuxt-link>
  </div>
</template>