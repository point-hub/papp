<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseAlert" isDismissable variant="light" color="info">
      This is alert message
    </component>
    <component :is="BaseAlert" isDismissable variant="light" color="success">
      This is alert message
    </component>
    <component :is="BaseAlert" isDismissable variant="light" color="danger">
      This is alert message
    </component>
  </Demo>
</template>
