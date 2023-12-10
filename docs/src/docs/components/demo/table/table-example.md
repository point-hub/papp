::: raw

<TableExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseTable } from '@point-hub/papp'
</script>

<template>
  <Demo>
    <component :is="BaseTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </component>
  </Demo>
</template>
```

:::
