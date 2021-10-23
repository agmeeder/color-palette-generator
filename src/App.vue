<template>
  <div class="p-4 text-gray-700">
    <h1 class="text-2xl">Colors</h1>
    <div>
      <Dropdown
        v-model="selectedPalette"
        :options="palettes"
        optionLabel="Palette"
        placeholder="Selecteer een kleurenplatte"
      />
    </div>
    <div>
      <app-palette
        v-for="(palette, index) in colors.palettes"
        :key="index"
        :palette="palette"
        @select-color="selectColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import store from './store/store'
import { Palette, Color } from './types'
import convert from 'color-convert'
import Dropdown from 'primevue/dropdown'
import AppPalette from './components/app-palette.vue'

const { colors, loadColors } = store
const selectedPalette = ref<Palette>({} as Palette)
const selectedColor = ref<Color>({} as Color)

const toRgb = computed(() => {
  const { h, s, l } = selectedColor.value
  return convert.hsl.rgb([h, s, l])
})

const palettes = computed(() => {
  return store.colors.value.palettes
})

const selectColor = (palette: Palette, color: Color) => {
  selectedPalette.value = palette
  selectedColor.value = color
}

onMounted(async () => {
  await loadColors()
})
</script>
