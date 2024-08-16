import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    toggleTask(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) task.completed = !task.completed;
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    toggleTask({ commit }, taskId) {
      commit('toggleTask', taskId);
    },
    removeTask({ commit }, taskId) {
      commit('removeTask', taskId);
    },
  },
  getters: {
    allTasks: (state) => state.tasks,
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    pendingTasks: (state) => state.tasks.filter((task) => !task.completed),
  },
});

export default store;
