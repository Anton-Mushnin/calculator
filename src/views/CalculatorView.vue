<script setup lang="ts">
  import {ref} from 'vue';
import TheInput from '../components/TheInput.vue';
import BaseButton from '../components/BaseButton.vue';
import { store } from '../stores/expression';
import { operators } from '../model/Operators';
import TheNumPad from '../components/TheNumPad.vue';


const input = ref();

function handle() {
  store.clear();
  input.value.focus();
}
</script>

<template>
  <div @keydown.esc="handle" class="container" tabindex="0">
    <input
      @input="store.checkAndEval()"
      type="text"
      class="input"
      v-model="store.expression"
      ref="input"
      id="input"
    />
    <BaseButton v-for="symbol in [...operators, '(', ')']" :key="symbol" :symbol="symbol" />
    <TheNumPad />
    <span class="result">{{ store.result }}</span>
  </div>
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
  padding: 2rem;
}
h3 {
  font-size: 1.2rem;
}

*:focus {
  outline: none;
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
