<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton">
      <base-icon icon="i-fad-books" />
    </component>
    <component :is="BaseButton" variant="outline" shape="pill">
      <base-icon icon="i-fad-books" />
    </component>
    <component :is="BaseButton"><base-icon icon="i-fad-books" /> Button</component>
    <component :is="BaseButton" variant="outline">
      Button <base-icon icon="i-fad-books" />
    </component>
  </Demo>
</template>
