<script setup lang="ts">
import { ref } from 'vue'

import websocketConfig from '@/config/websocket'

import { BaseButton, emitter, useWebsocketStore } from '../index'

interface IEventUserOnline {
  event: string
  user: string
  status: string
}

const messages = ref<IEventUserOnline[]>([])
emitter.on('user-online', (e) => {
  messages.value.push(e)
})

const websocket = useWebsocketStore()

const onSubmit = () => {
  if (websocket.readyState()) {
    websocket.send({
      event: 'user-online',
      user: 'user_id',
      status: 'online'
    })
  }
}

const onOpen = () => {
  if (websocket && websocket.isClosed()) {
    websocket.open(websocketConfig.url)
  }
}

const onClose = () => {
  if (websocket.socket && websocket.isOpen()) {
    websocket.close()
  }
}
</script>

<template>
  <div class="flex flex-col container mx-auto gap-4">
    <h1>Socket Example</h1>
    <div class="card">
      <div class="gap-2 flex">
        <component :is="BaseButton" variant="outlined" color="primary" size="sm" @click="onOpen">
          Open Connection
        </component>
        <component :is="BaseButton" variant="outlined" color="danger" size="sm" @click="onClose">
          Close Connection
        </component>
        <component :is="BaseButton" variant="outlined" color="danger" size="sm" @click="onSubmit">
          Message
        </component>
      </div>
      <div>
        <p>Connection Status : {{ websocket.status }}</p>
        <p v-for="(message, index) in messages" :key="index">
          {{ message.event }}
        </p>
      </div>
    </div>
  </div>
</template>
