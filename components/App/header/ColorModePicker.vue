<script setup lang="ts">
  import '@/assets/components/header.css'
</script>

<template>
  <ul class="header--color-modes">
    <li
      v-for="color of ['light', 'dark']"
      :key="color"
      :class="{
        selected: color == $colorMode.value,
      }"
    >
    <template v-if="color === 'light'">
      <AppHeaderIconLight @click="$colorMode.preference = color"/>
    </template>
    <template v-if="color === 'dark'">
      <AppHeaderIconDark @click="$colorMode.preference = color"/>
    </template>

    </li>
  </ul>
</template>

<style>

.selected .feather {
  color: var(--color-primary);
}
.selected{
  border-color: var(--color-primary)!important;
}

</style>