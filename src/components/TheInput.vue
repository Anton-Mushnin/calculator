<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { store } from '../stores/expression';
</script>

<template>
  <input
    @input="store.eval()"
    type="text"
    class="input"
    v-model="store.expression"
  />
</template>
