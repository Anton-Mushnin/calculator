<script setup lang="ts">
import type { VNode } from 'vue';
import { store } from '../stores/expression';
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
