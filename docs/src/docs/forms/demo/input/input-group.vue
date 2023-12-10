<script setup lang="ts">
import { ref } from 'vue'
import { BaseInput, BaseIcon } from '@point-hub/papp'

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
          <component :is="BaseIcon" icon="i-far-user mx-2" />
        </template>
      </component>
      <component :is="BaseInput" required v-model="form.password" label="Password" type="password">
        <template #suffix>
          <button type="button" class="btn">
            <component :is="BaseIcon" icon="i-far-eye mx-2" />
          </button>
        </template>
      </component>
    </form>
  </Demo>
</template>
