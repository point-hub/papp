<script setup lang="ts">
import { BaseButton, BaseIcon } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton">
      <component :is="BaseIcon" icon="i-fad-books" />
    </component>
    <component :is="BaseButton" variant="outline" shape="pill">
      <component :is="BaseIcon" icon="i-fad-books" />
    </component>
    <component :is="BaseButton"><component :is="BaseIcon" icon="i-fad-books" /> Button</component>
    <component :is="BaseButton" variant="outline"
      >Button <component :is="BaseIcon" icon="i-fad-books"
    /></component>
  </Demo>
</template>
