<script setup lang="ts">
import { store } from '../stores/expression';
</script>

<template>
  <div class="input-container">
    <input
      @input="store.checkAndEval()"
      type="text"
      class="input"
      v-model="store.expression"
      id="input"
    />
    <div class="result">{{ store.result }}</div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  padding: 51px 32px;
  background-color: white;
  border-radius: 10px;
  height: 212px;
  justify-content: space-between;
}

input {
  border-style: none;
  outline: none;
  color: #5a8bae;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.08em;
  vertical-align: middle;
}

.result {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.08em;
}
</style>
