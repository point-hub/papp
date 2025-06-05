<script setup lang="ts"></script>

<template>
  <nav class="header">
    <div class="header-container">
      <!-- Left Header -->
      <slot name="left-header"></slot>
      <!-- Right Header -->
      <div class="flex items-center">
        <slot name="right-header"></slot>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav.header {
  @apply fixed top-0 flex w-full h-60px max-h-60px z-10 px-4 bg-white dark:bg-slate-900 shadow transition-all;
}

.is-sidebar-open nav.header {
  @apply lg:w-[calc(100%-(var(--sidebar-panel-width)+var(--sidebar-menu-width)))] lg:ml-[calc(var(--sidebar-panel-width)+var(--sidebar-menu-width))] duration-300 transition-all;
}

.header-container {
  @apply relative w-full flex items-center justify-between;
}
</style>
