<template>
  <li
    :class="[$style.taskItem, task.completed ? $style.taskCompleted : '']"
    :draggable="true"
    @dragstart="onDragStart"
    @dragover="onDragOver"
    @drop="onDrop"
    @dragend="onDragEnd"
    :data-id="task.id"
  >
    <div :class="$style.taskWrapper">
      <InputCheckbox :checked="task.completed" :disabled="false" :id="task.id" @change="toggleCheckbox" />
      <div :class="$style.taskDescription">
        <span :class="$style.taskTitle">{{ task.title }}</span>
        <AppButton :customClass="$style.deleteButton" @click="removeTask(task.id)"> X </AppButton>
      </div>
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
    toggleCheckbox() {
      this.$store.dispatch('toggleTask', this.task.id);
    },
    onDragStart(event) {
      event.dataTransfer.setData('text/plain', this.task.id);
    },
    onDragOver(event) {
      event.preventDefault();
    },
    onDrop(event) {
      event.preventDefault();
      const draggedTaskId = event.dataTransfer.getData('text/plain');
      this.$emit('drop', draggedTaskId, this.task.id);
    },
  },
};
</script>

<style module lang="scss">
.taskItem {
  border-bottom: 1px solid #ccc;
  background-color: $white-color;

  &.taskCompleted {
    .taskTitle {
      text-decoration: line-through;
      color: #b1b1b1;
    }
  }

  &:hover {
    background-color: $hover-color;

    .deleteButton {
      visibility: visible;
    }
  }

  .taskWrapper {
    display: flex;
    align-items: center;
  }

  .taskDescription {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-medium;
    cursor: grab;
  }

  .taskTitle {
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    max-width: 350px;
  }

  .deleteButton {
    visibility: hidden;
    margin-right: $spacing-small;
  }
}
</style>
