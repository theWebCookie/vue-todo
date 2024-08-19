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

<style module>
.inputWrapper {
  display: flex;
  gap: 10px;
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>
