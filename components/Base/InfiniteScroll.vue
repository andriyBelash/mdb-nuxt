<script setup lang="ts">

  const observer: Ref<IntersectionObserver | undefined> = ref()
  const scrollEnd: Ref<HTMLElement | undefined> = ref()
  const scroller: Ref<HTMLElement | undefined> = ref()

  const emit = defineEmits<{
    load: [disconnect?: () => void]
  }>();



  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          emit('load', observer.value?.disconnect.bind(observer.value));
        }
      }, 
      {
        root: document.body,
        rootMargin: '0px',
        threshold: 1.0 // Adjust this as necessary
      }
    );

    if (scrollEnd.value) {
      observer.value.observe(scrollEnd.value);
    }
  });
</script>

<template>
  <div ref="scroller">
    <slot></slot>
    <div ref="scrollEnd"></div>
  </div>
</template>