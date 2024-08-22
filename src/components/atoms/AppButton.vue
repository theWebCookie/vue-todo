<template>
  <button :class="[$style.button, customClass, { [$style.active]: isActive }]" @click="handleClick">
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
    isActive: {
      type: Boolean,
      default: false,
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

  &:hover,
  &.active {
    color: $primary-color;
  }
}
</style>
