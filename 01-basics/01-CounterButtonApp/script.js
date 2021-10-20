import { createApp } from './vendor/vue.esm-browser.js';

const Root = createApp({
  data() {
    return {
      counter: 0,
    };
  },
}).mount('#app');
