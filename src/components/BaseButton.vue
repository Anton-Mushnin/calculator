<script setup lang="ts">
import { store } from '../stores/expression';
const props = defineProps<{
  symbol: string;
  childclass: object;
}>();

function handle() {
  store.addSymbol(props.symbol);
}
</script>

<template>
  <button @click="handle" type="button" :class="childclass">
    {{ symbol }}
  </button>
</template>

<style scoped>
button {
  font-size: 32px;
  background-color: white;
  border-style: none;
  padding: 6px 6px;
  aspect-ratio: 1;
  transition: all 0.5s;
}

.digit:hover,
.operator:hover {
  font-size: 1.2em;
  background-color: rgba(90, 139, 174, 0.05);
}

.digit:active,
.operator:active {
  background-color: rgba(90, 139, 174, 0.3);
}
.digit {
  color: #5a8bae;
}

.operator {
  color: #fba705;
}
</style>
