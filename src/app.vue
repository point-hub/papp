<script setup lang="ts">
import { useDarkMode } from './composable/dark-mode'
import { useScreenSize } from '@/composable/screen-size'

useDarkMode()
useScreenSize()
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
