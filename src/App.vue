<template>
  <h1>Colors</h1>
  <ul>
    <li v-for="palette in colors.palettes">
      {{ palette.name }}
      <div class="flex flex-row space-x-2">
        <app-color v-for="color in palette.colors" :key="color.h" :color="color" @select-color="selectColor(color)" />
      </div>
    </li>
  </ul>
  <app-color :color="selectedColor" />
  <div>{{ toRgb }}</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import store from './store/store'
import { Color } from './types'
import convert from 'color-convert'
import AppColor from './components/AppColor.vue'

const { colors, loadColors } = store
const selectedColor = ref<Color>({} as Color)

const toRgb = computed(() => {
  const { h, s, l } = selectedColor.value
  return convert.hsl.rgb([h, s, l])
})

const selectColor = (color: Color) => {
  selectedColor.value = color
}

onMounted(async () => {
  await loadColors()
})
</script>
