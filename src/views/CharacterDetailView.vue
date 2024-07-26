<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const characterName = route.params.characterName

</script>

<template>
  <div class="container">
    {{ characterName }}
  </div>
</template>

<style scoped>
</style>
