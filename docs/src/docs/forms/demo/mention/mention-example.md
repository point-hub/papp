The height of the Mention Autosize component automatically adjusts as a response to keyboard inputs and window resizing events.

::: raw

<ClientOnly>
  <MentionExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { computed, ref } from "vue"

type Trigger = '@' | '#'

interface MentionOption {
  id: string | number
  label: string
  link?: string
}

interface Token {
  text: string
  type: "text" | "mention"
  link?: string
}

const text = ref("")
const mentions = ref<MentionOption[]>([])

const userOptions = ref<MentionOption[]>([
  { id: 1, label: "alice" },
  { id: 2, label: "bob" },
  { id: 3, label: "charlie" },
  { id: 4, label: "dwaynejohnson" },
])
const tagOptions = ref<MentionOption[]>([
  { id: "t1", label: "vue" },
  { id: "t2", label: "typescript" }
])

const loading = ref(false)

function onSearch(payload: { trigger: Trigger; query: string }) {
  console.log("Searching", payload)
}

// Quick lookup maps (trigger -> { label: link })
const lookup = computed<Record<Trigger, Record<string, string | undefined>>>(() => ({
  "@": Object.fromEntries(userOptions.value.map(u => [u.label.toLowerCase(), u.link])),
  "#": Object.fromEntries(tagOptions.value.map(t => [t.label.toLowerCase(), t.link])),
}))

// Tokenize preview
const tokens = computed<Token[]>(() => {
  const regex = /([@#]\w+)/g
  const parts: Token[] = []
  let last = 0
  let m: RegExpExecArray | null

  while ((m = regex.exec(text.value)) !== null) {
    if (m.index > last) {
      parts.push({ text: text.value.slice(last, m.index), type: "text" })
    }

    const trig = m[0][0] as Trigger
    const lbl = m[0].slice(1).toLowerCase()

    parts.push({
      text: m[0],
      type: "mention",
      link: lookup.value[trig]?.[lbl],
    })

    last = regex.lastIndex
  }

  if (last < text.value.length) {
    parts.push({ text: text.value.slice(last), type: "text" })
  }

  return parts
})
</script>

<template>
  <form @submit.prevent="">
    <base-mention v-model="text" :options="{ '@': userOptions, '#': tagOptions }" :triggers="['@', '#']"
      :loading="loading" @update:mentions="mentions = $event" @search="onSearch" :min-height="100" border="full" />
  </form>

  <div style="white-space: pre-wrap;">
    <h1>Preview</h1>
    <div style="border: #64748b 0.5px solid; padding: 8px; min-height: 100px;">
      <template v-for="(t, i) in tokens" :key="i">
        <a v-if="t.type === 'mention' && t.link" :href="t.link" target="_blank" style="color: blue;">
          {{ t.text }}
        </a>
        <span v-else-if="t.type === 'mention'" style="color: blue;">
          {{ t.text }}
        </span>
        <span v-else>
          {{ t.text }}
        </span>
      </template>
    </div>
  </div>
</template>
```

:::
