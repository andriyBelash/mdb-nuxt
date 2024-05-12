<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button{
    padding: 10px 15px;
    color: var(--color-primary);
    width: max-content;
    cursor: pointer;
    background-color: var(--bg);
    border: 2px solid var(--border-color);
    border-radius: 5px;
  }
  .button:hover{
    border-color: var(--color-primary);
  }
</style>