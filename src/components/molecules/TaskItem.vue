<template>
  <li :class="[$style.taskItem, task.completed ? $style.taskCompleted : '']">
    <label :for="task.id" :class="$style.taskLabel">
      <InputCheckbox :checked="task.completed" :disabled="false" :id="task.id" />
      <div :class="$style.taskDescription">
        <span :class="$style.taskTitle">{{ task.title }}</span>
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

  &.taskCompleted {
    text-decoration: line-through;
    color: #b1b1b1;
  }

  &:hover {
    background-color: $hover-color;
    .deleteButton {
      visibility: visible;
    }
  }

  .taskLabel {
    display: flex;
    gap: $spacing-small;
    padding: $spacing-medium;
    cursor: pointer;
  }

  .taskDescription {
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .taskTitle {
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      max-width: 350px;
    }
  }
}

.deleteButton {
  visibility: hidden;
  margin-right: $spacing-small;
}
</style>
