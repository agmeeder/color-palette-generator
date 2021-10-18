<template>
  <h1>Colors</h1>
  <ul>
    <li v-for="palette in colors.palettes">
      {{ palette.name }}
      <div class="flex flex-row space-x-2">
        <div
          v-for="color in palette.colors"
          class="w-12 h-12 pt-2 rounded-full border-2 text-center"
          :style="hsl(color)"
        >
          {{ color.h }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import store from './store/store'
import { Color } from './types'

const { colors, loadColors } = store

const hsl = (color: Color) => {
  return {
    backgroundColor: `hsl(${color.h}, ${color.s} , ${color.b});`
  }
}

onMounted(async () => {
  await loadColors()
})
</script>
