<template>
  <li :class="$style.taskItem">
    <input type="checkbox" :id="task.id" :checked="task.completed" @change="handleCheckBoxChange" />
    <div :class="$style.taskName">
      <label :for="task.id">{{ task.title }}</label>
      <button :class="$style.deleteButton">X</button>
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
    toggleTask: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleCheckBoxChange() {
      this.toggleTask(this.task.id);
    },
  },
};
</script>

<style module>
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
