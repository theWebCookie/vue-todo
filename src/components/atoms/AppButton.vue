<template>
  <button :class="[$style.button, customClass]" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    customClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style module lang="scss">
.button {
  all: unset;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
}
</style>
