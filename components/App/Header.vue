<script setup lang="ts">
  import '@/assets/components/header.css'
  const { locale, locales, setLocale } = useI18n()
  
  const changeLocale = async (locale: string) => {
    await setLocale(locale)
    window.location.reload()
  }
</script>

<template>
  <header class="header">
    <div class="locales">
      <span @click="() => changeLocale('en')" :class="{'current-locale': locale === 'en'}">en</span>
      <span @click="() => changeLocale('uk')" :class="{'current-locale': locale === 'uk'}">укр</span>
    </div>
    <ClientOnly>
      <AppHeaderColorModePicker/>
      <template #fallback>
        <div class="color-preloader">...</div>
        <div class="color-preloader">...</div>
      </template>
    </ClientOnly>
  </header>
</template>

<style>
.locales {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color);
}

.locales span{
  cursor: pointer;
}

.locales .current-locale{
  color: var(--color-primary);
  pointer-events: none;
}

.color-preloader{
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid var(--border-color);
}
</style>