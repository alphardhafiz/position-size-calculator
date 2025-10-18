<script setup>
import { ref } from 'vue';

const entry = ref('');
const stopLoss = ref('');
const maxLoss = ref('');
const result = ref(null);

const calculate = () => {
  const entryPrice = parseFloat(entry.value);
  const slPrice = parseFloat(stopLoss.value);
  const maxLossAmount = parseFloat(maxLoss.value);

  if (!entryPrice || !slPrice || !maxLossAmount) {
    return;
  }

  const distance = Math.abs(entryPrice - slPrice);
  const distancePercent = (distance / entryPrice) * 100;
  const coinAmount = maxLossAmount / distance;
  const capital = coinAmount * entryPrice;

  result.value = {
    distance: distance.toFixed(4),
    distancePercent: distancePercent.toFixed(2),
    coinAmount: coinAmount.toFixed(6),
    capital: capital.toFixed(2)
  };
};
</script>

<template>
  <div class="min-h-screen bg-gradient">
    <div class="container">
      <!-- Header -->
      <header class="header">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>
        <h1>Position Size Calculator</h1>
        <p class="subtitle">Hitung ukuran posisi trading Anda dengan akurat</p>
      </header>

      <!-- Main Card -->
      <div class="card">
        <!-- Form -->
        <div class="form">
          <div class="input-group">
            <label class="label">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Entry Price
            </label>
            <input
              v-model.number="entry"
              type="number"
              placeholder="Contoh: 130"
              class="input"
            />
          </div>

          <div class="input-group">
            <label class="label">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Stop Loss
            </label>
            <input
              v-model.number="stopLoss"
              type="number"
              placeholder="Contoh: 107"
              class="input"
            />
          </div>

          <div class="input-group">
            <label class="label">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              Max Loss (USDT)
            </label>
            <input
              v-model.number="maxLoss"
              type="number"
              placeholder="Contoh: 10"
              class="input"
            />
          </div>

          <button @click="calculate" class="btn">
            Hitung Sekarang
          </button>
        </div>

        <!-- Result Card -->
        <div v-if="result" class="result-card">
          <div class="result-item">
            <span class="result-label">Jarak SL</span>
            <span class="result-value">{{ result.distance }} - ({{ result.distancePercent }}%)</span>
          </div>
          
          <div class="result-item">
            <span class="result-label">Jumlah Coin</span>
            <span class="result-value result-value-blue">{{ result.coinAmount }}</span>
          </div>
          
          <div class="result-item result-item-highlight">
            <span class="result-label-highlight">Modal Diperlukan</span>
            <span class="result-value-highlight">{{ result.capital }} USDT</span>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <p class="footer">Selalu gunakan risk management yang baik dalam trading</p>
    </div>
  </div>
</template>

<style>
/* Global styles - tidak pakai scoped */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
* {
  box-sizing: border-box;
}

.bg-gradient {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e293b 0%, #6b21a8 50%, #1e293b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 1rem; */
  font-family: system-ui, -apple-system, sans-serif;
}

.container {
  width: 100%;
  max-width: 28rem;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2rem;
  animation: fadeIn 0.6s ease-out;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  color: white;
}

.header h1 {
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
  margin: 0 0 0.5rem 0;
}

.subtitle {
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
}

/* Card */
.card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  overflow: hidden;
}

/* Form */
.form {
  padding: 1.5rem;
}

.input-group {
  margin-bottom: 1.25rem;
}

.label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #d1d5db;
  margin-bottom: 0.5rem;
}

.label svg {
  margin-right: 0.375rem;
  color: #60a5fa;
}

.input {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid #475569;
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  transition: all 0.2s;
}

.input::placeholder {
  color: #6b7280;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input::-webkit-inner-spin-button,
.input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input[type=number] {
  -moz-appearance: textfield;
}

.btn {
  width: 100%;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
  color: white;
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: all 0.2s;
  margin-top: 1rem;
}

.btn:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.btn:active {
  transform: scale(0.98);
}

/* Result Card */
.result-card {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9));
  border-top: 1px solid rgba(71, 85, 105, 0.5);
  padding: 1.5rem;
  animation: slideUp 0.4s ease-out;
}

.result-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 0.75rem;
  border: 1px solid rgba(71, 85, 105, 0.5);
  margin-bottom: 1rem;
}

.result-item:last-child {
  margin-bottom: 0;
}

.result-item-highlight {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  border-color: rgba(59, 130, 246, 0.3);
}

.result-label {
  color: #9ca3af;
  font-size: 0.875rem;
}

.result-value {
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
}

.result-value-blue {
  color: #60a5fa;
}

.result-label-highlight {
  color: #d1d5db;
  font-weight: 500;
}

.result-value-highlight {
  color: #4ade80;
  font-weight: bold;
  font-size: 1.25rem;
}

/* Footer */
.footer {
  text-align: center;
  color: #6b7280;
  font-size: 0.75rem;
  margin-top: 1.5rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .header h1 {
    font-size: 1.5rem;
  }
  
  .form {
    padding: 1.25rem;
  }
  
  .result-card {
    padding: 1.25rem;
  }
}
</style>