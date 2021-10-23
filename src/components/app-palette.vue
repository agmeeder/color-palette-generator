<template>
  <div class="mt-4">
    <span class="uppercase">{{ palette.name }}</span> Palette
  </div>
  <div class="grid grid-cols-12 gap-2 mb-4">
    <app-color
      v-for="(color, index) in palette.colors"
      :key="index"
      :color="color"
      class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 h-24 rounded-md shadow-lg cursor-pointer"
      @click="selectColor(palette, color)"
    />
  </div>
</template>

<script setup lang="ts">
import AppColor from './app-color.vue'
import { Color, Palette } from '../types'

const sortColors = (color_a: Color, color_b: Color) => {
  return color_a.h < color_b.h ? -1 : color_a.h > color_b.h ? 1 : 0
}

const props = defineProps<{ palette: Palette }>()
props.palette.colors.sort(sortColors)
const emits = defineEmits(['selectColor'])

const selectColor = (palette: Palette, color: Color) => {
  emits('selectColor', palette, color)
}
</script>
