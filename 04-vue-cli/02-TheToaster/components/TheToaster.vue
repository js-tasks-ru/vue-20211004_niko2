<template>
  <div class="toasts">
    <UiToast v-for="toast in toasts" :key="toast.id" v-bind="toast"></UiToast>
  </div>
</template>

<script>
import UiToast from './UiToast';

let id = 0;

export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    success(message) {
      let successToast = {
        id: id++,
        type: 'success',
        message: message,
        delayTime: 5000,
      }

      this.toasts.push(successToast);
      this.removeToasterTimer(successToast);
    },

    error(message) {
      let errorToast = {
        id: id++,
        type: 'error',
        message: message,
        delayTime: 5000,
      }

      this.toasts.push(errorToast);
      this.removeToasterTimer(errorToast);
    },

    removeToasterTimer(toast) {
      setTimeout(() => {
        this.toasts = this.toasts.filter((toastItem) => toast.id !== toastItem.id);
      }, toast.delayTime)
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
