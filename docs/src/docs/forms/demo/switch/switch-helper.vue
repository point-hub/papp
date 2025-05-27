<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checked1: false,
  checked2: false,
  checked3: false,
  checked4: false,
  checked5: false
})

const errors = ref(['Error Example'])
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-switch v-model="form.checked1" label="Label" layout="horizontal" required />
      <base-switch
        v-model="form.checked2"
        label="Label"
        layout="horizontal"
        description="Description example"
      />
      <base-switch
        v-model="form.checked3"
        label="Label"
        layout="horizontal"
        :helpers="['Description example']"
      />
      <base-switch
        v-model="form.checked4"
        label="Label"
        layout="horizontal"
        v-model:errors="errors"
      />
      <base-switch
        v-model="form.checked5"
        label="Label"
        layout="horizontal"
        description="Disabled"
        disabled
      />
    </form>
  </Demo>
</template>
