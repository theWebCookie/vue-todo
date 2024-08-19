<template>
  <div :class="$style.layout">
    <div :class="$style.title">
      <h1 :class="$style.heading">Todo</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-moon"
        :class="$style.moon"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </div>
    <AddInput />
    <TaskList />
    <ListControls />
  </div>
</template>

<script>
import AddInput from '../addInput/AddInput.vue';
import TaskList from '../tasks/TaskList.vue';
import ListControls from '../ListControls/ListControls.vue';

export default {
  name: 'MainContent',
  components: {
    AddInput,
    TaskList,
    ListControls,
  },
};
</script>

<style module lang="scss">
.layout {
  position: absolute;
  top: 190px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 450px;
  width: 100%;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    color: white;

    .heading {
      text-transform: uppercase;
      letter-spacing: 15px;
    }

    .moon {
      fill: white;
    }
  }
}
</style>
