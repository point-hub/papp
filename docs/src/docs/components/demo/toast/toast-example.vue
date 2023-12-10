<script setup lang="ts">
import { BaseToast } from '@point-hub/papp'
import { ref } from 'vue'

const toastRef = ref()
</script>

<template>
  <Demo is-row>
    <button
      class="btn btn-primary btn-md"
      @click="
        toastRef.toast('Primary toast message', { color: 'primary', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </button>
    <button
      class="btn btn-secondary btn-md"
      @click="
        toastRef.toast('Secondary toast message', {
          color: 'secondary',
          autoClose: false,
          timer: 0
        })
      "
    >
      Toast Message
    </button>
    <button
      class="btn btn-info btn-md"
      @click="toastRef.toast('Info toast message', { color: 'info', autoClose: false, timer: 0 })"
    >
      Toast Message
    </button>
    <button
      class="btn btn-success btn-md"
      @click="
        toastRef.toast('Success toast message', { color: 'success', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </button>
    <button
      class="btn btn-warning btn-md"
      @click="
        toastRef.toast('Warning toast message', { color: 'warning', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </button>
    <button
      class="btn btn-danger btn-md"
      @click="
        toastRef.toast('Danger toast message', { color: 'danger', autoClose: false, timer: 0 })
      "
    >
      Toast Message
    </button>
    <button
      class="btn btn-primary btn-md"
      @click="
        toastRef.toast('Close after 3 second', { color: 'primary', autoClose: true, timer: 3000 })
      "
    >
      Close after 3 second
    </button>
    <component :is="BaseToast" ref="toastRef" />
  </Demo>
</template>
