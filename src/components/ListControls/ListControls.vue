<template>
  <div :class="$style.controls">
    <div>
      <span v-if="tasksLeft === 0">No tasks left</span>
      <span v-else-if="tasksLeft === 1">1 task left</span>
      <span v-else>{{ tasksLeft }} tasks left</span>
    </div>
    <div :class="$style.filterButtons">
      <button @click="filterTasks('all')">All</button>
      <button @click="filterTasks('active')">Active</button>
      <button @click="filterTasks('completed')">Completed</button>
    </div>
    <div :class="$style.clearButton">
      <button @click="clearCompleted">Clear Completed</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListControls',
  computed: {
    tasksLeft() {
      return this.$store.getters.tasksLeft;
    },
  },
  methods: {
    filterTasks(filter) {
      this.$store.dispatch('setFilter', filter);
    },
    clearCompleted() {
      this.$store.dispatch('clearCompletedTasks');
    },
  },
};
</script>

<style module lang="scss">
.controls {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  font-size: 14px;
  justify-content: space-between;
  color: #b0b0b0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  .filterButtons button,
  .clearButton button {
    all: unset;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #007bff;
    }
  }
  .filterButtons button {
    margin: 0 5px;
  }
}
</style>
