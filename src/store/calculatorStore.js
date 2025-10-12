import { reactive } from "vue";

const store = reactive({
  entry: null,
  stopLoss: null,
  maxLoss: null,
  result: null,
  distance: 0,
  coinAmount: 0,

  calculate() {
    if (!this.entry || !this.stopLoss || !this.maxLoss) return;
    this.distance = Math.abs(this.entry - this.stopLoss);
    this.coinAmount = this.maxLoss / this.distance;
    this.result = this.coinAmount * this.entry;
  },
});

export default store;
