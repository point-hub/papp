/* eslint-disable @typescript-eslint/no-unused-vars */
import { jsonParse } from '@point-hub/express-utils/lib/json/parse'
import { jsonStringify } from '@point-hub/express-utils/lib/json/stringify'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { emitter } from '../index'

export const useWebsocketStore = defineStore('websocket', () => {
  const socket = ref<WebSocket>()
  const reconnectingStatus = ref(false)
  const reconnectingTry = ref(0)
  const reconnectingMaxTry = ref(10)
  const reconnectingInterval = ref(1000)
  const status = ref(0)
  const url = ref('')

  const isOpen = () => {
    return socket.value?.readyState === socket.value?.OPEN
  }

  const isClosed = () => {
    return socket.value?.readyState === socket.value?.CLOSED
  }

  const reconnect = () => {
    reconnectingStatus.value = true
    reconnectingTry.value++
    reconnectingInterval.value += reconnectingTry.value * 1000

    if (socket.value?.readyState === socket.value?.CLOSING) {
      setTimeout(reconnect, reconnectingInterval.value)
      return
    }
    if (socket.value?.readyState === socket.value?.CONNECTING) {
      setTimeout(reconnect, reconnectingInterval.value)
      return
    }
    if (socket.value?.readyState === socket.value?.OPEN) {
      reconnectingStatus.value = false
      reconnectingTry.value = 0
      return
    }
    open(url.value)

    if (reconnectingTry.value < reconnectingMaxTry.value) {
      setTimeout(reconnect, reconnectingInterval.value)
    }
  }

  const open = (socketUrl: string) => {
    url.value = socketUrl
    socket.value = new WebSocket(url.value)
    // message is received
    socket.value.onmessage = (event) => {
      const data = jsonParse(event.data)
      emitter.emit(data.event, data)
    }
    // socket opened
    socket.value.onopen = (event) => {
      status.value = 1
    }
    // socket closed
    socket.value.onclose = (event) => {
      status.value = 0
      if (reconnectingStatus.value === false) {
        setTimeout(reconnect, reconnectingInterval.value)
      }
    }
    // error handler
    socket.value.onerror = (event) => {}
  }

  function close() {
    socket.value?.close()
  }

  function send(data: Record<string, any>) {
    socket.value?.send(jsonStringify(data))
  }

  function readyState() {
    return socket.value?.readyState
  }

  return {
    readyState,
    socket,
    send,
    open,
    close,
    status,
    isOpen,
    isClosed
  }
})
