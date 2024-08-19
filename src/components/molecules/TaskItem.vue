<template>
  <li :class="$style.taskItem">
    <InputCheckbox :checked="task.completed" :disabled="false" :id="task.id" />
    <div :class="$style.taskName">
      <label :for="task.id">{{ task.title }}</label>
      <AppButton :customClass="$style.deleteButton" @click="removeTask(task.id)"> X </AppButton>
    </div>
  </li>
</template>

<script>
import AppButton from '../atoms/AppButton.vue';
import InputCheckbox from '../atoms/InputCheckbox.vue';

export default {
  name: 'TaskItem',
  components: {
    InputCheckbox,
    AppButton,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeTask(taskId) {
      this.$store.dispatch('removeTask', taskId);
    },
  },
};
</script>

<style module lang="scss">
.taskItem {
  display: flex;
  gap: 10px;
  padding: 15px 10px;
  border-bottom: 1px solid #ccc;

  .taskName {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover .deleteButton {
    visibility: visible;
  }
}

.deleteButton {
  visibility: hidden;
}
</style>
