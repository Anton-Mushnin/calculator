<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import TheEvalButton from './TheEvalButton.vue';
import { digits } from '../model/Operators';
import { store } from '../stores/expression';

const firstRow = [
  'C',
  '(',
  ')',
  '+',
  '7',
  '8',
  '9',
  '-',
  '4',
  '5',
  '6',
  '*',
  '1',
  '2',
  '3',
  '/',
  '.',
  '0',
  '\u221A',
  '%',
];
// const digits
</script>

<template>
  <div class="wrapper">
    <BaseButton
      v-for="symbol in firstRow"
      :key="symbol"
      :symbol="symbol"
      :childclass="{
        digit: digits.includes(symbol),
        operator: !digits.includes(symbol),
      }"
    />
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
}
</style>
