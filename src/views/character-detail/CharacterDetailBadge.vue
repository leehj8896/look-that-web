<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  selected: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div 
    v-bind:class="[
      'badge',
      selected ? 'selected' : '',
    ]"
  >
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.badge {
  display: inline-block;
  width: 80px;
  height: 30px;
  border: solid;
  border-radius: 50%;
  text-align: center;
}
.container p {
  line-height: 30px;
}
.selected {
  background-color: black;
  color: white;
}
</style>
