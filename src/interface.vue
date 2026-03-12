<template>
    <div class="code">
      <qrcode-vue
        class="qr"
        v-bind:class="value == '' || !value ? 'hidden' : ''"
        :value="value || ''"
        :size="300"
        level="H"
      />
    </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  emits: ["input"],
  props: {
    value: String,
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    },
  },
  components: {
    QrcodeVue,
  },
};
</script>

<style scoped>
.code {
  border: var(--border-width) solid var(--border-normal);
  border-top: none;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 1rem;
  padding-top: 1.5rem;
  margin-top: -0.5rem;
}
.qr {
  width: 300px !important;
  height: auto !important;
  max-width: 100%;
}
.qr.hidden {
  display: none;
}
</style>
