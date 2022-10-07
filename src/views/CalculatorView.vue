<script setup lang="ts">
  import {ref} from 'vue';
import TheInput from '../components/TheInput.vue';
import BaseButton from '../components/BaseButton.vue';
import { store } from '../stores/expression';
import { operators } from '../model/Operators';
import TheNumPad from '../components/TheNumPad.vue';
import TheInputAndOutput from '../components/TheInputAndOutput.vue';


const input = ref();

function handle() {
  store.clear();
}
</script>

<template>
  <div @keydown.esc="handle" class="container" tabindex="0">
    <TheInputAndOutput />
    <TheNumPad />
  </div>
</template>

<style scoped>

.container{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-items: stretch; */
}

*:focus {
  outline: none;
}
</style>
