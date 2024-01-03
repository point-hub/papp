<script setup lang="ts">
import { BaseInput } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  name1: '',
  name2: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseInput"
        v-model="form.name1"
        label="Label"
        layout="horizontal"
        description="Horizontal Layout"
      />
      <component
        :is="BaseInput"
        v-model="form.name2"
        label="Label"
        layout="vertical"
        description="Vertical Layout"
      />
    </form>
  </Demo>
</template>
