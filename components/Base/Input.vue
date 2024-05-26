<script setup lang="ts">

  const props = defineProps<{ 
    modelValue: string,
    placeholder?: string
   }>()
  const emit = defineEmits<{ 'update:modelValue': [e: string] }>()

</script>

<template>
  <div class="base-input">
    <input 
      @input="($event) => emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :value="modelValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<style>
  .base-input{
    height: 50px;
  }
  .base-input input{
    height: 100%;
    border: 1px solid var(--color-primary);
    width: 100%;
    background-color: var(--bg);
    padding: 0 12px;
    color: var(--color);
    font-size: 20px;
    border-radius: 5px;
  }
</style>