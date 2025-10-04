Customize treeview content using slot

::: raw

<ClientOnly>
  <TreeviewCustom />
</ClientOnly>

:::

::: details Code

```vue


<template>
  <Demo>
    <base-treeview :is-open="true">
      <template #header="slotProps">
        <base-icon v-if="!slotProps.isOpen" icon="i-fa7-regular:folder" class="w-4 h-4" />
        <base-icon v-if="slotProps.isOpen" icon="i-fa7-regular:folder-open" class="w-4 h-4" />
        <p class="flex-1 text-left">Parent 1</p>
      </template>
      <base-treeview :is-open="true">
        <template #header="slotProps">
          <base-icon v-if="!slotProps.isOpen" icon="i-fa7-regular:folder" class="w-4 h-4" />
          <base-icon v-if="slotProps.isOpen" icon="i-fa7-regular:folder-open" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1</p>
        </template>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.3</p>
        </base-button>
      </base-treeview>
      <base-treeview>
        <template #header="slotProps">
          <i
            class="i-fa7-regular:folder"
            :class="{
              'i-fa7-regular:folder-open': slotProps.isOpen
            }"
          ></i>
          <p class="flex-1 text-left">Child 2</p>
        </template>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.3</p>
        </base-button>
      </base-treeview>
    </component>
    <base-treeview>
      <template #header="slotProps">
        <base-icon v-if="!slotProps.isOpen" icon="i-fa7-regular:folder" class="w-4 h-4" />
        <base-icon v-if="slotProps.isOpen" icon="i-fa7-regular:folder-open" class="w-4 h-4" />
        <p class="flex-1 text-left">Parent 2</p>
      </template>
      <base-treeview>
        <template #header="slotProps">
          <i
            class="i-fa7-regular:folder"
            :class="{
              'i-fa7-regular:folder-open': slotProps.isOpen
            }"
          ></i>
          <p class="flex-1 text-left">Child 1</p>
        </template>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 1.3</p>
        </base-button>
      </base-treeview>
      <base-treeview>
        <template #header="slotProps">
          <i
            class="i-fa7-regular:folder"
            :class="{
              'i-fa7-regular:folder-open': slotProps.isOpen
            }"
          ></i>
          <p class="flex-1 text-left">Child 2</p>
        </template>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fa7-regular:file-lines" class="w-4 h-4" />
          <p class="flex-1 text-left">Child 2.3</p>
        </base-button>
      </base-treeview>
    </component>
  </Demo>
</template>
```

:::
