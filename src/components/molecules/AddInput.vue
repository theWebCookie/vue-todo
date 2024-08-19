<template>
  <div :class="$style.inputWrapper">
    <InputCheckbox :disabled="true" />
    <TextInput :placeholder="'Add your task'" />
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
};
</script>

<style module lang="scss">
.inputWrapper {
  display: flex;
  gap: $spacing-small;
  background-color: $white-color;
  padding: $spacing-small;
  margin-bottom: $spacing-large;
  border-radius: $border-radius;
}
</style>
