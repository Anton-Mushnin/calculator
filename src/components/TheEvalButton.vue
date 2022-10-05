<script setup lang="ts">
import { store } from '../stores/expression';
</script>

<template>
  <button @click="store.eval()">=</button>
</template>
