import { ref, type Ref } from 'vue'

export const useDragAndScroll = () => {
  const slider: Ref<HTMLElement | null> = ref(null);
  const isDown: Ref<boolean> = ref(false);
  const startX: Ref<number | null> = ref(null);
  const scrollLeft: Ref<number | null> = ref(null);

  const handleMouseDown = (e: MouseEvent) => {
    isDown.value = true;
    startX.value = e.pageX - (slider.value?.offsetLeft ?? 0);
    scrollLeft.value = slider.value?.scrollLeft ?? 0;
  };

  const handleMouseLeave = () => {
    isDown.value = false;
  };

  const handleMouseUp = () => {
    isDown.value = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown.value) return;
    e.preventDefault();
    const x = e.pageX - (slider.value?.offsetLeft ?? 0);
    const walk = (x - (startX.value ?? 0)) * 3; //scroll-fast
    slider.value!.scrollLeft = (scrollLeft.value ?? 0) - walk;
  };

  return {
    slider, isDown, handleMouseDown, handleMouseLeave, handleMouseMove, handleMouseUp
  }
}