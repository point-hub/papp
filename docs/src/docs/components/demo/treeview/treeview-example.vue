<template>
  <Demo>
    <base-treeview title="Parent 1" :is-open="true">
      <base-treeview title="Child 1" :is-open="true">
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.3</p>
        </base-button>
      </base-treeview>
      <base-treeview title="Child 2">
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.3</p>
        </base-button>
      </base-treeview>
    </base-treeview>
    <base-treeview title="Parent 2">
      <base-treeview title="Child 1">
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 1.3</p>
        </base-button>
      </base-treeview>
      <base-treeview title="Child 2">
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.1</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.2</p>
        </base-button>
        <base-button is-block class="space-x-4">
          <base-icon icon="i-fas-circle" class="w-2 h-2" />
          <p class="flex-1 text-left">Child 2.3</p>
        </base-button>
      </base-treeview>
    </base-treeview>
  </Demo>
</template>
