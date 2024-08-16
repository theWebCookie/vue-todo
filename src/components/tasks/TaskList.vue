<template>
  <ul :class="$style.list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" :toggle-task="toggleTask" />
  </ul>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleTask(taskId) {
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        console.log(this.tasks);
      }
    },
  },
};
</script>

<style module>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 38px 12px 0px rgb(120, 120, 120);
}
</style>
