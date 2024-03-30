<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" color="primary">
      <base-icon icon="i-fad-books" />
    </component>
    <component :is="BaseButton" color="primary" variant="outlined" shape="pill">
      <base-icon icon="i-fad-books" />
    </component>
    <component :is="BaseButton" color="primary"><base-icon icon="i-fad-books" /> Button</component>
    <component :is="BaseButton" color="primary" variant="outlined">
      Button <base-icon icon="i-fad-books" />
    </component>
  </Demo>
</template>
