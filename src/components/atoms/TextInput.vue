<template>
  <input type="text" :placeholder="placeholder" :class="$style.searchBar" v-model="inputValue" @keyup.enter="addTask" />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      default: 'Add your task',
    },
  },
  data() {
    return {
      inputValue: '',
      inputExceedsLimit: false,
    };
  },
  watch: {
    inputValue(newValue) {
      this.inputExceedsLimit = newValue.length > 150;
      this.$emit('input-exceeds-limit', this.inputExceedsLimit);
    },
  },
  methods: {
    addTask() {
      if (this.inputExceedsLimit) return;
      if (this.inputValue.trim()) {
        const task = {
          id: Date.now(),
          title: this.inputValue,
          completed: false,
        };
        this.$store.dispatch('addTask', task);
        this.inputValue = '';
      }
    },
  },
};
</script>

<style module lang="scss">
.searchBar {
  width: 100%;
  padding: $spacing-small 0;
  font-size: 16px;
  border: none;
  outline: none;
}
</style>
