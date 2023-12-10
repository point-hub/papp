<script setup lang="ts">
import { ref } from 'vue'
import { BaseInput } from '@point-hub/papp'

const form = ref({
  name1: '',
  name2: '',
  name3: '',
  name4: '',
  name5: '',
  name6: 'Disabled'
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseInput" v-model="form.name1" label="Label" required />
      <component
        :is="BaseInput"
        v-model="form.name2"
        label="Label"
        placeholder="Placeholder example"
      />
      <component
        :is="BaseInput"
        v-model="form.name3"
        label="Label"
        description="Description example"
      />
      <component :is="BaseInput" v-model="form.name4" label="Label" :helpers="['Helper example']" />
      <component :is="BaseInput" v-model="form.name5" label="Label" :errors="['Error example']" />
      <component
        :is="BaseInput"
        v-model="form.name6"
        label="Label"
        description="Disabled"
        disabled
      />
    </form>
  </Demo>
</template>
