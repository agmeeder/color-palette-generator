<template>
  <div
    @click="selectColor(color)"
    class="w-24 h-24 p-2 rounded-full shadow-2xl text-center"
    :style="{ 'background-color': `hsl(${color.h}, ${color.s}%, ${color.l}%, ${color.a})` }"
  ></div>
</template>

<script setup lang="ts">
import { Color } from '../types'

const props = defineProps<{ color: Color }>()
const emits = defineEmits(['selectColor'])

const selectColor = (color: Color) => {
  emits('selectColor', props.color)
}
</script>
