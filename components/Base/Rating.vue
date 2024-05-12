<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: number
  }>(),
  {
    value: 0,
  },
)

const style = computed(() => ({
  'clip-path': `inset(0 ${(10 - props.value) * 10}% 0 0)`,
}))
</script>

<template>
  <div :class="$style['stars-container']">
    <nuxt-img :class="$style.star" src="/stars.webp" />
    <nuxt-img :class="$style.star" src="/stars-filled.webp" :style="style" />
  </div>
</template>

<style module>
  .stars-container{
    position: relative;
    width: 100px;
    height: 20px;
    filter: hue-rotate(310deg);
  }
  .star{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>