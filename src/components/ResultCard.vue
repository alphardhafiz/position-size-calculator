<script setup>
import store from "../store/calculatorStore";
</script>

<template>
  <div v-if="store.result" class="card">
    <p>
      Jarak SL: <strong>{{ store.distance }}</strong>
    </p>
    <p>
      Jumlah Coin: <strong>{{ store.coinAmount }}</strong>
    </p>
    <p>
      Modal Diperlukan: <strong>{{ store.result }} USDT</strong>
    </p>
  </div>
</template>

<style scoped>
.card {
  background: #2d2d2d;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  color: #f5f5f5;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
