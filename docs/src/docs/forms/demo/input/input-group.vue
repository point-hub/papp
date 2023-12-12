<script setup lang="ts">
import { ref } from 'vue'
import { BaseInput } from '@point-hub/papp'

const form = ref({
  name: '',
  password: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseInput"
        required
        v-model="form.name"
        label="Name"
        placeholder="Placeholder Name"
      >
        <template #prefix>
          <base-icon icon="i-far-user mx-2" />
        </template>
      </component>
      <component :is="BaseInput" required v-model="form.password" label="Password" type="password">
        <template #suffix>
          <button type="button" class="btn">
            <base-icon icon="i-far-eye mx-2" />
          </button>
        </template>
      </component>
    </form>
  </Demo>
</template>
