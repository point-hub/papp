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
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="filled"
    >
      Filled Button
    </component>
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="light"
    >
      Light Button
    </component>
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="outlined"
    >
      Outlined Button
    </component>
    <component
      :is="BaseButton"
      @click="toggleLoading()"
      :isLoading="isLoading"
      color="primary"
      variant="text"
    >
      Text Button
    </component>
  </Demo>
</template>
