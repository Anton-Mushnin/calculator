<script setup lang="ts">
import { operators } from '../model/Operators';
import { store } from '../stores/expression';
defineProps<{
  symbol: string;
}>();
</script>

<template>
  <button @click="store.addSymbol(symbol)" type="button">
    {{ symbol }}
  </button>
</template>
