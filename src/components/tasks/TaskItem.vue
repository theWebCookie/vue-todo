<template>
  <li :class="$style.taskItem">
    <input type="checkbox" :id="task.id" :checked="task.completed" @change="toggleTask(task.id)" />
    <div :class="$style.taskName">
      <label :for="task.id">{{ task.title }}</label>
      <button :class="$style.deleteButton" @click="removeTask(task.id)">X</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleTask(taskId) {
      this.$store.dispatch('toggleTask', taskId);
    },
    removeTask(taskId) {
      this.$store.dispatch('removeTask', taskId);
    },
  },
};
</script>

<style module lang="scss">
.taskItem {
  display: flex;
  gap: 10px;
  padding: 15px 10px;
  border-bottom: 1px solid #ccc;

  .taskName {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .deleteButton {
      all: unset;
      cursor: pointer;
      visibility: hidden;
    }
  }

  &:hover .deleteButton {
    visibility: visible;
  }
}
</style>
