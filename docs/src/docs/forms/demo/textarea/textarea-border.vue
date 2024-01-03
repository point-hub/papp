<script setup lang="ts">
import { BaseTextarea } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  text1: '',
  text2: '',
  text3: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseTextarea"
        label="Without Border"
        v-model="form.text1"
        border="none"
      ></component>
      <component
        :is="BaseTextarea"
        label="Simple Border"
        v-model="form.text2"
        border="simple"
      ></component>
      <component
        :is="BaseTextarea"
        label="Full Border"
        v-model="form.text3"
        border="full"
      ></component>
    </form>
  </Demo>
</template>
