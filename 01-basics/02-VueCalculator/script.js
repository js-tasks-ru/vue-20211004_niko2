import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      inputFirst: 0,
      inputSecond: 0,
      operand: '',
    };
  },

  computed: {
    calculate() {
      if (this.operand === 'sum') {
        return this.inputFirst + this.inputSecond;
      }
      if (this.operand === 'subtract') {
        return this.inputFirst - this.inputSecond;
      }
      if (this.operand === 'multiply') {
        return this.inputFirst * this.inputSecond;
      }
      if (this.operand === 'divide') {
        return this.inputFirst / this.inputSecond;
      }
      return '';
    },
  },
}).mount('#app');
