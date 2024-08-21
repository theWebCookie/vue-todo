<template>
  <ul :class="$style.list">
    <li v-if="!tasks.length" :class="$style.noTasks">No tasks yet</li>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
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
  }
}
</style>
