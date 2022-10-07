<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import { digits } from '../model/Validation';

const symbols = [
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
</script>

<template>
  <div class="wrapper">
    <BaseButton
      v-for="symbol in symbols"
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
  font-size: 32px;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: white;
  padding: 8px;
  border-radius: 10px;
}
</style>
