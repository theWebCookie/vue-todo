<template>
  <div :class="$style.controls">
    <div>
      <span v-if="tasksAmount === 0">No items left</span>
      <span v-else-if="tasksAmount === 1">1 item left</span>
      <span v-else>{{ tasksAmount }} items left</span>
    </div>
    <div :class="$style.filterButtons">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    <div :class="$style.clearButton">
      <button>Clear Completed</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListControls',
  props: {
    tasksAmount: {
      type: Number,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style module>
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
