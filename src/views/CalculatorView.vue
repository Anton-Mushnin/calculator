<script setup lang="ts">
import TheInput from '../components/TheInput.vue';
import BaseButton from '../components/BaseButton.vue';
import { store } from '../stores/expression';
import { operators } from '../model/Operators';
import TheNumPad from '../components/TheNumPad.vue';
function handle() {
  store.clear();
}
</script>

<template>
  <span @keydown.esc="handle" class="container">
  <TheInput></TheInput>
  <BaseButton v-for="symbol in [...operators, '(', ')']" :key="symbol" :symbol="symbol" />
  <TheNumPad />
  <span class="result">{{ store.result }}</span>
  </span>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
.container {
  height: 100%;
  background-color: aliceblue;
  color:blue;
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
