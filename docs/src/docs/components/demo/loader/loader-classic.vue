<template>
  <Demo class="grid cols-2">
    <base-card class="relative">
      <div class="ribbon">#1</div>
      <base-loader type="classic" sample="1">Loading...</base-loader>
    </base-card>
    <base-card class="relative">
      <div class="ribbon">#2</div>
      <base-loader type="classic" sample="2">Loading...</base-loader>
    </base-card>
    <base-card class="relative">
      <div class="ribbon">#3</div>
      <base-loader type="classic" sample="3">Loading...</base-loader>
    </base-card>
    <base-card class="relative">
      <div class="ribbon">#4</div>
      <base-loader type="classic" sample="4">Loading...</base-loader>
    </base-card>
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
