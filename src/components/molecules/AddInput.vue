<template>
  <div :class="[$style.inputWrapper, exceedsLimit ? $style.exceededLimit : '']">
    <InputCheckbox :disabled="true" />
    <TextInput :placeholder="'Add your task'" @input-exceeds-limit="handleInputExceedsLimit" />
  </div>
</template>

<script>
import InputCheckbox from '../atoms/InputCheckbox.vue';
import TextInput from '../atoms/TextInput.vue';

export default {
  name: 'AddInput',
  components: {
    InputCheckbox,
    TextInput,
  },
  data() {
    return {
      exceedsLimit: false,
    };
  },
  methods: {
    handleInputExceedsLimit(value) {
      this.exceedsLimit = value;
    },
  },
};
</script>

<style module lang="scss">
.inputWrapper {
  display: flex;
  background-color: $white-color;
  padding: $spacing-small;
  padding-left: 0;
  margin-bottom: $spacing-large;
  border-radius: $border-radius;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}

.exceededLimit {
  border: 1px solid red;
  background-color: #ffe6e6;
}
</style>
