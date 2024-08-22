<template>
  <input type="checkbox" :disabled="disabled" :class="$style.checkBox" @change="toggleTask(id)" :checked="checked" :id="id" />
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
      this.$store.dispatch('toggleTask', taskId);
    },
  },
};
</script>

<style module lang="scss">
.checkBox {
  margin-left: $spacing-small;
}
</style>
