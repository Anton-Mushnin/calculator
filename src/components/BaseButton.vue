<script setup lang="ts">
import { store } from '../stores/expression';
import { binaryOperators, unaryOperators } from '@/model/Operators';
const props = defineProps<{
  symbol: string;
  childclass: object;
}>();

function handle() {
  store.addSymbol(props.symbol);
}
</script>

<template>
  <button @click="handle" type="button" tabindex="1" :class="childclass">
    {{ symbol }}
  </button>
</template>

<style scoped>
button {
  /* width: 100%; */
  font-size: 32px;
  background-color: white;
  border-style: none;
  padding: 6px 6px;
  aspect-ratio: 1;
}

.digit {
  color: #5a8bae;
}

.operator {
  color: #fba705;
}

button:hover {
  background-color: rgba(245, 245, 220, 0.1);
}
</style>
