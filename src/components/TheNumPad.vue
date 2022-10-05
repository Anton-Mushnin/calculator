<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import TheEvalButton from './TheEvalButton.vue';
const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
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
