import { createStore } from 'vuex';

const defaultState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  filter: 'all',
};

const store = createStore({
  state: defaultState,
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTask(state, taskId) {
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
    clearCompletedTasks(state) {
      state.tasks = state.tasks.filter((task) => !task.completed);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTaskOrder(state, tasks) {
      state.tasks = tasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
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
    setFilter({ commit }, filter) {
      commit('setFilter', filter);
    },
    clearCompletedTasks({ commit }) {
      commit('clearCompletedTasks');
    },
    updateTaskOrder({ commit }, tasks) {
      commit('updateTaskOrder', tasks);
    },
  },
  getters: {
    filteredTasks: (state) => {
      if (state.filter === 'all') return state.tasks;
      else if (state.filter === 'active') return state.tasks.filter((task) => !task.completed);
      else if (state.filter === 'completed') return state.tasks.filter((task) => task.completed);
    },
    tasksLeft: (state) => state.tasks.filter((task) => !task.completed).length,
    tasksCompleted: (state) => state.tasks.filter((task) => task.completed).length,
  },
});

export default store;
