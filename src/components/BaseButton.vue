<script setup lang="ts">
import { store } from '../stores/expression';
import { binaryOperators, unaryOperators } from '@/model/Operators';
const props = defineProps<{
  symbol: string;
}>();

function handle() {
  store.addSymbol(props.symbol);
  document.getElementById('input')?.focus();
}
</script>

<template>
  <button @click="handle" type="button" tabindex="1">
    {{ symbol }}
  </button>
</template>
