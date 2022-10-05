<script setup lang="ts">
import TheInput from './TheInput.vue';
import BaseButton from './BaseButton.vue';
import { store } from '../stores/expression';
import { operators } from '../model/Operators';
import TheNumPad from './TheNumPad.vue';
defineProps<{
  msg: string;
}>();
const digits = [
  '(',
  ')',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
];
</script>

<template>
  <TheInput></TheInput>
  <BaseButton v-for="symbol in operators" :key="symbol" :symbol="symbol" />
  <TheNumPad />
  <span class="result">{{ store.result }}</span>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
