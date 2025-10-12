<script setup>
import CalculatorForm from "./components/CalculatorForm.vue";
import HeaderBar from "./components/HeaderBar.vue";
import ResultCard from "./components/ResultCard.vue";
</script>

<template>
  <main class="app">
    <HeaderBar />
    <CalculatorForm />
    <ResultCard />
  </main>
</template>

<style scoped>
.app {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #121212;
  border-radius: 16px;
  font-family: system-ui, sans-serif;
  color: #fff;
}

/* Responsiveness */
@media (max-width: 600px) {
  .app {
    margin: 1rem;
    padding: 1rem;
  }
}
</style>
