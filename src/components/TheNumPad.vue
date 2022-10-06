<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import TheEvalButton from './TheEvalButton.vue';
import { digits } from '../model/Operators';
</script>

<template>
  <div class="wrapper">
    <BaseButton v-for="digit in digits" :key="digit" :symbol="digit" />
    <TheEvalButton />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: aliceblue;
}
</style>
