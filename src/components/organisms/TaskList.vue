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
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 38px 12px 0px rgb(120, 120, 120);
  max-height: 300px;
  overflow-y: auto;

  .noTasks {
    padding: 10px;
    text-align: center;
    color: #b0b0b0;
  }
}
</style>
