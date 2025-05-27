::: raw

<ClientOnly>
  <TimelineExample />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-timeline>
    <base-timeline-content>
      <template #point>
        <img src="https://placehold.co/150" alt="" class="mx-auto h-12 w-12 rounded-full" />
      </template>
      <template #content>
        <div>
          <h4 class="text-base font-bold">John Doe</h4>
          <p class="text-sm font-light">5 second</p>
        </div>
        <p class="font-light -mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </template>
    </base-timeline-content>
    <base-timeline-content>
      <template #point>
        <img src="https://placehold.co/150" alt="" class="mx-auto h-12 w-12 rounded-full" />
      </template>
      <template #content>
        <div>
          <h4 class="text-base font-bold">John Doe</h4>
          <p class="text-sm font-light">35 minute</p>
        </div>
        <p class="font-light -mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </template>
    </base-timeline-content>
  </base-timeline>
</template>
```

:::
