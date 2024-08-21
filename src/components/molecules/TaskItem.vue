<template>
  <li :class="$style.taskItem">
    <label :for="task.id">
      <InputCheckbox :checked="task.completed" :disabled="false" :id="task.id" />
      <div :class="$style.taskName">
        <span>{{ task.title }}</span>
        <AppButton :customClass="$style.deleteButton" @click="removeTask(task.id)"> X </AppButton>
      </div>
    </label>
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
    toggleCheckbox() {
      this.$store.dispatch('toggleTask', this.task.id);
    },
  },
};
</script>

<style module lang="scss">
.taskItem {
  border-bottom: 1px solid #ccc;

  label {
    display: flex;
    gap: $spacing-small;
    padding: $spacing-medium;
    cursor: pointer;
  }

  .taskName {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: $hover-color;
    .deleteButton {
      visibility: visible;
    }
  }
}

.deleteButton {
  visibility: hidden;
}
</style>
