<template>
  <label :for="id" :class="[$style.label, { [$style.checked]: checked }]">
    <input type="checkbox" :disabled="disabled" :class="$style.checkBox" :checked="checked" :id="id" name="checkbox" />
  </label>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    toggleTask(taskId) {
      this.$emit('change', taskId);
    },
  },
};
</script>

<style module lang="scss">
.label {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url('/src/assets/circle.svg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  position: relative;
  margin-left: $spacing-small;

  .checkBox {
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  &.checked {
    background-image: url('/src/assets/circle-check.svg');
  }
}
</style>
