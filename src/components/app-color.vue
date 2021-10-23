<template>
  <div :style="{ 'background-color': `hsl(${color.h}, ${color.s}%, ${color.l}%, ${color.a})` }"></div>
</template>

<script setup lang="ts">
import { Color } from '../types'
const props = defineProps<{ color: Color }>()
</script>
