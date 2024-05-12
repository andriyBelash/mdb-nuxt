<script setup lang="ts">
  interface Props { title: string, url: string}

  const { title, url } = defineProps<Props>()

  const { slider, isDown, handleMouseDown, handleMouseLeave, handleMouseMove, handleMouseUp } = useDragAndScroll()

</script>

<template>
  <section :class="$style['section-page']">
    <div :class="$style['section-page--header']">
      <h2>{{ title }}</h2>
      <NuxtLink :class="$style['section-page--link']" :to="url">{{ $t('buttons.show_more') }}</NuxtLink>
    </div>
    <div 
      ref="slider"
      :style="{ cursor: isDown ? 'grabbing' : 'grab'}"
      @mousedown="handleMouseDown"
      @mouseleave="handleMouseLeave"
      @mouseup="handleMouseUp"
      @mousemove="handleMouseMove" 
      :class="$style['section-page--content']"
    >
      <slot></slot>
    </div>
  </section>
</template>

<style module>
  .section-page{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .section-page--header{
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
  }

  .section-page--link{
    text-decoration: none;
    color: #ffffff9a;
    transition: .2s;
  }

  .section-page--link:hover{
    color: var(--color-primary);
    transition: .2s;
  }

  .section-page--content{
    display: flex;
    gap: 12px;
    overflow: auto;
    padding-bottom: 15px
  }
</style>