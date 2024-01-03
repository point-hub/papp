<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
import { ref } from 'vue'

const isLoading = ref(true)

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" @click="toggleLoading()" :isLoading="isLoading" variant="fill">
      Fill Button
    </component>
    <component :is="BaseButton" @click="toggleLoading()" :isLoading="isLoading" variant="light">
      Light Button
    </component>
    <component :is="BaseButton" @click="toggleLoading()" :isLoading="isLoading" variant="outline">
      Outline Button
    </component>
    <component :is="BaseButton" @click="toggleLoading()" :isLoading="isLoading" variant="text">
      Text Button
    </component>
  </Demo>
</template>
