<template>
  <div :class="$style.controls">
    <div>
      <span v-if="tasksLeft === 0">No tasks left</span>
      <span v-else-if="tasksLeft === 1">1 task left</span>
      <span v-else>{{ tasksLeft }} tasks left</span>
    </div>
    <div :class="$style.filterButtons">
      <AppButton v-for="filter in filters" :key="filter.name" :customClass="$style.filterButton" @click="filterTasks(filter.value)">
        {{ filter.name }}
      </AppButton>
    </div>
    <div :class="$style.clearButton">
      <AppButton @click="clearCompleted" :customClass="$style.clearButtonStyle"> Clear Completed </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton.vue';

export default {
  name: 'ListControls',
  components: {
    AppButton,
  },
  computed: {
    tasksLeft() {
      return this.$store.getters.tasksLeft;
    },
    filters() {
      return [
        { name: 'All', value: 'all' },
        { name: 'Active', value: 'active' },
        { name: 'Completed', value: 'completed' },
      ];
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

  .filterButtons {
    display: flex;
  }

  .filterButton {
    margin: 0 5px;
  }
}
</style>
