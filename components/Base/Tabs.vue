<script setup lang="ts">
  interface Props {
    tabs: string[],
    selected: string,
    baseLink: string
  }

  const { tabs, selected } = defineProps<Props>()
 

</script>

<template>
  <div :class="$style.tabs">
    <template v-for="tab of tabs" :key="tab">
      <NuxtLink 
        :to="`/${baseLink}/${tab}`" 
        :class="[$style.tab, { 'tab-selected': tab === selected }]"
      >
        {{ $t(`tabs.${tab}`) }}
      </NuxtLink>
    </template>
  </div>
</template>

<style module>
  .tabs{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .tab{
    color: var(--color);
    text-decoration: none;
    font-size: 20px;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 10px; 
  }
  .tab:hover{
  }
</style>

<style scoped>
  .tab-selected{
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
  </style>