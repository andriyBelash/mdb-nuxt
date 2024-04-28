<script>
</script>

<template>
  <div class="site-layout">
    <AppSidebar/>
    <div class="site-content">
      <AppHeader/>
      <div class="page">
        <slot></slot>
      </div>
    </div>
  </div>
</template>