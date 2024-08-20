import store from '../index';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('Vuex Store', () => {
  beforeEach(() => {
    localStorage.clear();
    store.replaceState({
      tasks: [],
      filter: 'all',
    });
  });

  it('mutations - addTask', () => {
    const task = { id: 1, title: 'Test Task', completed: false };
    store.commit('addTask', task);
    const state = store.state;
    expect(state.tasks).toContainEqual(task);
    expect(JSON.parse(localStorage.getItem('tasks'))).toContainEqual(task);
  });

  it('mutations - toggleTask', () => {
    const task = { id: 2, title: 'Test Task 2', completed: false };
    store.commit('addTask', task);
    store.commit('toggleTask', task.id);
    const state = store.state;
    expect(state.tasks.find((t) => t.id === task.id).completed).toBe(true);
    expect(JSON.parse(localStorage.getItem('tasks')).find((t) => t.id === task.id).completed).toBe(true);
  });

  it('mutations - removeTask', () => {
    const task = { id: 3, title: 'Test Task 3', completed: false };
    store.commit('addTask', task);
    store.commit('removeTask', task.id);
    const state = store.state;
    expect(state.tasks).not.toContainEqual(task);
    expect(JSON.parse(localStorage.getItem('tasks'))).not.toContainEqual(task);
  });

  it('mutations - setFilter', () => {
    const task1 = { id: 4, title: 'Test Task 4', completed: true };
    const task2 = { id: 5, title: 'Test Task 5', completed: false };
    store.commit('addTask', task1);
    store.commit('addTask', task2);
    store.commit('setFilter', 'active');
    const state = store.state;
    expect(state.filter).toBe('active');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([task1, task2]);
  });

  it('mutations - clearCompletedTasks', () => {
    const task1 = { id: 4, title: 'Test Task 4', completed: true };
    const task2 = { id: 5, title: 'Test Task 5', completed: false };
    store.commit('addTask', task1);
    store.commit('addTask', task2);
    store.commit('clearCompletedTasks');
    const state = store.state;
    expect(state.tasks).toEqual([task2]);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([task2]);
  });

  it('actions - addTask', async () => {
    const task = { id: 6, title: 'Action Task', completed: false };
    await store.dispatch('addTask', task);
    const state = store.state;
    expect(state.tasks).toContainEqual(task);
  });

  it('actions - toggleTask', async () => {
    const task = { id: 7, title: 'Action Task 2', completed: false };
    await store.dispatch('addTask', task);
    await store.dispatch('toggleTask', task.id);
    const state = store.state;
    expect(state.tasks.find((t) => t.id === task.id).completed).toBe(true);
  });

  it('actions - removeTask', async () => {
    const task = { id: 8, title: 'Action Task 3', completed: false };
    await store.dispatch('addTask', task);
    await store.dispatch('removeTask', task.id);
    const state = store.state;
    expect(state.tasks).not.toContainEqual(task);
  });

  it('actions - setFilter', async () => {
    await store.dispatch('setFilter', 'completed');
    const state = store.state;
    expect(state.filter).toBe('completed');
  });

  it('actions - clearCompletedTasks', async () => {
    const task1 = { id: 9, title: 'Action Task 4', completed: true };
    const task2 = { id: 10, title: 'Action Task 5', completed: false };
    await store.dispatch('addTask', task1);
    await store.dispatch('addTask', task2);
    await store.dispatch('clearCompletedTasks');
    const state = store.state;
    expect(state.tasks).toEqual([task2]);
  });

  it('getters - filteredTasks', () => {
    const task1 = { id: 11, title: 'Task 6', completed: true };
    const task2 = { id: 12, title: 'Task 7', completed: false };
    store.commit('addTask', task1);
    store.commit('addTask', task2);
    store.commit('setFilter', 'completed');
    expect(store.getters.filteredTasks).toContainEqual(task1);
    expect(store.getters.filteredTasks).not.toContainEqual(task2);
  });

  it('getters - tasksLeft', () => {
    const task1 = { id: 13, title: 'Task 8', completed: true };
    const task2 = { id: 14, title: 'Task 9', completed: false };
    store.commit('addTask', task1);
    store.commit('addTask', task2);
    expect(store.getters.tasksLeft).toBe(1);
  });
});
