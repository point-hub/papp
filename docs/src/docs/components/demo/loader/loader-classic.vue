<script setup lang="ts">
import { BaseCard, BaseLoader } from '@point-hub/papp'
</script>

<template>
  <Demo class="grid cols-2">
    <component :is="BaseCard" class="relative">
      <div class="ribbon">#1</div>
      <component :is="BaseLoader" type="classic" sample="1">Loading...</component>
    </component>
    <component :is="BaseCard" class="relative">
      <div class="ribbon">#2</div>
      <component :is="BaseLoader" type="classic" sample="2">Loading...</component>
    </component>
    <component :is="BaseCard" class="relative">
      <div class="ribbon">#3</div>
      <component :is="BaseLoader" type="classic" sample="3">Loading...</component>
    </component>
    <component :is="BaseCard" class="relative">
      <div class="ribbon">#4</div>
      <component :is="BaseLoader" type="classic" sample="4">Loading...</component>
    </component>
  </Demo>
</template>

<style>
.ribbon {
  font-size: 12px;
  font-weight: bold;
  color: #fff;
}
.ribbon {
  --r: 0.5em; /* control the ribbon shape (the radius) */
  --c: #fa6900;

  position: absolute;
  top: 10px;
  left: calc(-1 * var(--r));
  line-height: 1.8;
  padding: 0 0.5em calc(2 * var(--r));
  padding-left: 12px;
  padding-right: 12px;
  border-radius: var(--r) 0 0 var(--r);
  background:
    radial-gradient(100% 50% at left, var(--c) 98%, #0000 101%) 100% 0/0.5lh
      calc(100% - 2 * var(--r)),
    radial-gradient(100% 50% at right, #0005 98%, #0000 101%) 0 100% / var(--r) calc(2 * var(--r)),
    conic-gradient(from 90deg at var(--r) calc(100% - 2 * var(--r)), #0000 25%, var(--c) 0) 0 0 /
      calc(101% - 0.5lh) 100%;
  background-repeat: no-repeat;
}
</style>
