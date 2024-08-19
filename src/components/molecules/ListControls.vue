<template>
  <div :class="$style.controls">
    <div>
      <span>{{ taskCountMessage }}</span>
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
import { mapGetters } from 'vuex';
import AppButton from '../atoms/AppButton.vue';

export default {
  name: 'ListControls',
  components: {
    AppButton,
  },
  computed: {
    ...mapGetters(['tasksLeft']),
    filters() {
      return [
        { name: 'All', value: 'all' },
        { name: 'Active', value: 'active' },
        { name: 'Completed', value: 'completed' },
      ];
    },
    taskCountMessage() {
      if (this.tasksLeft === 0) {
        return 'No tasks left';
      } else if (this.tasksLeft === 1) {
        return '1 task left';
      } else {
        return `${this.tasksLeft} tasks left`;
      }
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
  background-color: $white-color;
  font-size: 14px;
  justify-content: space-between;
  color: $light-gray-color;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;

  .filterButtons {
    display: flex;
  }

  .filterButton {
    margin: 0 5px;
  }
}
</style>
