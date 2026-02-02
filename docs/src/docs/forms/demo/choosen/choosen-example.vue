<script setup lang="ts">
import type { BaseChoosenOptionInterface } from '@point-hub/papp'
import { ref } from 'vue'

const options = ref([
  {
    _id: '1',
    label: 'Jane',
    value: 'jane'
  },
  {
    _id: '2',
    label: 'John Doe',
    value: 'john-doe'
  }
])

const modelId = ref()
const selected = ref()
const search = ref()

function onSelect(option?: BaseChoosenOptionInterface) {
  selected.value = option ?? null
}
</script>

<template>
  <Demo is-row>
    <base-choosen
      title="Example"
      v-model="modelId" 
      v-model:search="search"
      :options="options"
      @select="onSelect"
    />
    <div class="flex flex-col gap-4">
      <div class="space-x-4">
        <span class="font-bold">Options</span>
        <span>{{ options }}</span>
      </div>
      <div class="space-x-4">
        <span class="font-bold">v-model</span>
        <span>{{ modelId }}</span>
      </div>
      <div class="space-x-4">
        <span class="font-bold">search</span>
        <span>{{ search }}</span>
      </div>
      <div class="space-x-4">
        <span class="font-bold">selected</span>
        <span>{{ selected }}</span>
      </div>
    </div>
  </Demo>
</template>
