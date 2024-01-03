<script setup lang="ts">
import { useScreenSize } from '@/composable/screen-size'

import { useDarkMode } from './composable/dark-mode'

useDarkMode()
useScreenSize()
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
