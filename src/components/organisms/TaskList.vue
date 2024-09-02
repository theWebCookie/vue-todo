<template>
  <ul ref="taskList" :class="$style.list">
    <li v-if="!tasks.length" :class="$style.noTasks" draggable="false">No tasks yet</li>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" @drop="onDrop" />
  </ul>
</template>

<script>
import TaskItem from '../molecules/TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks;
    },
  },
  methods: {
    onDrop(draggedTaskId, targetTaskId) {
      const tasks = [...this.tasks];
      const draggedIndex = tasks.findIndex((task) => task.id == draggedTaskId);
      const targetIndex = tasks.findIndex((task) => task.id == targetTaskId);

      if (draggedIndex === -1 || targetIndex === -1 || draggedIndex === targetIndex) return;

      const [movedTask] = tasks.splice(draggedIndex, 1);
      tasks.splice(targetIndex, 0, movedTask);
      this.$store.dispatch('updateTaskOrder', tasks);
    },
  },
};
</script>

<style module lang="scss">
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: $white-color;
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
  box-shadow: 0px 38px 12px 0px rgb(120, 120, 120);
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;

  .noTasks {
    padding: $spacing-small;
    text-align: center;
    color: $light-gray-color;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
