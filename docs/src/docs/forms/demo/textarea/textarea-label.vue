<script setup lang="ts">
import { BaseTextarea } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  text1: '',
  text2: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseTextarea"
        label="Label"
        v-model="form.text1"
        layout="vertical"
        description="Vertical Layout"
      />
      <component
        :is="BaseTextarea"
        label="Label"
        v-model="form.text2"
        layout="horizontal"
        description="Horizontal Layout"
      />
    </form>
  </Demo>
</template>
