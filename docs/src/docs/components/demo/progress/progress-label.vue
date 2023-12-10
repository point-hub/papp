<script setup lang="ts">
import { BaseProgress } from '@point-hub/papp'
import { ref } from 'vue'

const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(100)
</script>

<template>
  <Demo>
    <component :is="BaseProgress" v-model="value1" color="danger" size="lg">
      <p>{{ value1 }}%</p>
    </component>
    <component :is="BaseProgress" v-model="value1" color="danger" size="lg">
      <p>{{ value1 }}%</p>
      <p>progress-lg</p>
    </component>
    <component :is="BaseProgress" v-model="value2" color="warning" size="xl">
      <p>{{ value2 }}%</p>
    </component>
    <component :is="BaseProgress" v-model="value2" color="warning" size="xl">
      <p>{{ value2 }}%</p>
      <p>progress-xl</p>
    </component>
    <component :is="BaseProgress" v-model="value3" color="success" size="2xl">
      <p>{{ value3 }}%</p>
    </component>
    <component :is="BaseProgress" v-model="value3" color="success" size="2xl">
      <p>{{ value3 }}%</p>
      <p>progress-2xl</p>
    </component>
  </Demo>
</template>
