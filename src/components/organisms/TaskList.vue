<template>
  <ul ref="taskList" :class="$style.list">
    <li v-if="!tasks.length" :class="$style.noTasks" draggable="false">No tasks yet</li>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskItem from '../molecules/TaskItem.vue';
import { Sortable } from '@shopify/draggable';

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
  mounted() {
    this.initializeDragAndDrop();
  },
  methods: {
    initializeDragAndDrop() {
      const sortable = new Sortable(this.$refs.taskList, {
        draggable: 'li',
        delay: 100,
        mirror: {
          createElement: () => {
            const mirrorElement = document.createElement('li');
            mirrorElement.className = this.$style.taskItem;
            mirrorElement.style.position = 'absolute';
            mirrorElement.style.pointerEvents = 'none';
            mirrorElement.style.zIndex = '9999';

            return mirrorElement;
          },
          appendTo: document.body,
        },
      });

      sortable.on('sortable:drag', (event) => {
        const mirrorElement = event.dragEvent.source;
        mirrorElement.style.left = `${event.dragEvent.source.getBoundingClientRect().left}px`;
        mirrorElement.style.top = `${event.dragEvent.source.getBoundingClientRect().top}px`;
      });

      sortable.on('sortable:stop', (event) => {
        const oldIndex = event.oldIndex;
        const newIndex = event.newIndex;

        if (oldIndex !== newIndex) {
          const tasks = [...this.tasks];
          const movedTask = tasks.splice(oldIndex, 1)[0];
          tasks.splice(newIndex, 0, movedTask);
          this.$store.dispatch('updateTaskOrder', tasks);
        }
      });
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
