<template>
  <Demo class="flex-row">
    <base-card :shadow="true">
      <template #header>With Shadow</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </base-card>

    <base-card>
      <template #header>Without Shadow</template>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </base-card>
  </Demo>
</template>
