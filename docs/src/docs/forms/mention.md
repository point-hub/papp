---
outline: deep
---

<script setup lang="ts">
import MentionExample from './demo/mention/mention-example.vue'
</script>

# Mention

The mention component is extends a standard textarea with mention and trigger support (e.g., @username, #tag). It helps users type rich content with interactive mentions by providing:

- **Triggers** – Define one or more characters (e.g., @, #) that activate mention suggestions.
- **Dynamic Options** – Pass a list of mentionable items (users, tags, etc.) from the parent component.
- **Autocomplete Dropdown** – Displays filtered suggestions as the user types after a trigger.
- **Keyboard Navigation** – Navigate suggestions with arrow keys, confirm with Enter, or cancel with Escape.
- **Mentions Extraction** – Emits a structured list of selected mentions so the parent can track which entities were referenced.

## Examples

<!--@include: ./demo/mention/mention-example.md-->

## Mention API

### Types

```ts
export type BaseMentionBorderType = 'simple' | 'full' | 'none'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
export type MentionOptionsMap = Record<string, IMentionOption[]>
export type SearchType = { payload: { trigger: string; query: string } }
export interface IMentionOption {
  id: number | string
  label: string
  link?: string
}
```

### Props

| Name             | Type                  | Default | Description                                                               |
|------------------|-----------------------|---------|---------------------------------------------------------------------------|
| v-model          | string                |         | v-model is `required`.                                                    |
| v-model:errors   | string[]              |         | Mention error message.                                                    |
| @update:mentions | IMentionOption[]      |         | Emits the list of mentions currently found in the textarea.               |
| @search          | SearchType            |         | Fired when a trigger is typed, useful for async option loading.           |
| options          | MentionOptionsMap     |         | Available mention options grouped by trigger character.                   |
| triggers         | string[]              |         | List of trigger characters to activate mention suggestions.               |
| loading          | boolean               | false   | Shows a *loading state* in the suggestions dropdown (e.g., "Searching…"). |
| id               | string                |         | Mention id.                                                               |
| label            | string                |         | Mention label.                                                            |
| description      | string                |         | Mention description.                                                      |
| placeholder      | string                |         | Mention placeholder.                                                      |
| border           | BaseMentionBorderType |         | Mention border.                                                           |
| layout           | BaseFormLayoutType    |         | Mention layout.                                                           |
| maxlength        | number                |         | Mention Max Length.                                                       |
| autofocus        | boolean               | false   | Focus mention on page load.                                               |
| required         | boolean               | false   | if true mention is `required`.                                            |
| disabled         | boolean               | false   | if true mention is `disabled`.                                            |
| readonly         | boolean               | false   | if true mention is `readonly`.                                            |
| helpers          | string[]              |         | Mention helper message.                                                   |
| minHeight        | number                |         | Mention min height.                                                       |
| maxHeight        | number                |         | Mention max height.                                                       |
| data-testid      | string                |         | Testing ID.                                                               |

## Automated Test Guide

If you pass a `data-testid` to the `<base-mention>` component, it will automatically generate unique `data-testid` attributes for testing.

### Gherkin Scenario

```txt
When I type "I need to upload a document file here." into "notes"
```

### Step Definition

```ts
When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})
```

### Code Implementation

```vue
<script setup>
import { ref } from 'vue'

const notes = ref()
</script>

<template>
  <base-mention v-model="notes" data-testid="notes" />
</template>
```
