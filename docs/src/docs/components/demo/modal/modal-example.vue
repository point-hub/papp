<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <Demo is-row>
    <base-button color="primary" size="md" @click="showModal = true"> Open Modal </base-button>
    <base-modal :is-open="showModal" @on-close="showModal = false">
      <div class="max-h-90vh overflow-auto p-4">
        <h2 class="py-4 text-2xl font-bold">Lorem Ipsum</h2>
        <div class="space-y-8">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A accusantium provident,
            blanditiis quam pariatur repellat? Animi ducimus fugit, similique libero et rem, quod
            repellat sunt itaque voluptas nihil saepe laboriosam?
          </p>
          <base-button color="primary" size="sm" @click="showModal = false" is-block>
            Close
          </base-button>
        </div>
      </div>
    </base-modal>
  </Demo>
</template>
