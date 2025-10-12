<script setup>
import store from "../store/calculatorStore";
</script>

<template>
  <div class="form">
    <label>Entry Price</label>
    <input
      v-model.number="store.entry"
      type="number"
      placeholder="Contoh: 130"
    />

    <label>Stop Loss</label>
    <input
      v-model.number="store.stopLoss"
      type="number"
      placeholder="Contoh: 107"
    />

    <label>Max Loss (USDT)</label>
    <input
      v-model.number="store.maxLoss"
      type="number"
      placeholder="Contoh: 10"
    />

    <button @click="store.calculate">Hitung</button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid #444;
  background: #1f1f1f;
  color: #fff;
  font-size: 1rem;
}
button {
  background: #3b82f6;
  color: white;
  padding: 0.8rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background: #2563eb;
}
</style>
