<script setup lang="ts">
  import '@/assets/components/header.css'
</script>

<template>
  <div class="header">
    <ClientOnly>
      <AppHeaderColorModePicker/>
    </ClientOnly>
  </div>
</template>