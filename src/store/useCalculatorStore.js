import { ref } from "vue";

export function useCalculatorStore() {
  const entry = ref(null);
  const stopLoss = ref(null);
  const maxLoss = ref(null);
  const result = ref(null);
  const distance = ref(0);
  const coinAmount = ref(0);

  const calculate = () => {
    if (!entry.value || !stopLoss.value || !maxLoss.value) return;
    distance.value = Math.abs(entry.value - stopLoss.value);
    coinAmount.value = maxLoss.value / distance.value;
    result.value = coinAmount.value * entry.value;
  };

  return { entry, stopLoss, maxLoss, result, distance, coinAmount, calculate };
}
