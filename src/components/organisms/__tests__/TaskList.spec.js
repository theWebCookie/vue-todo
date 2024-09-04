import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, jest } from '@jest/globals';
import { createStore } from 'vuex';
import TaskList from '../TaskList.vue';
import TaskItem from '../../molecules/TaskItem.vue';

const styles = {
  list: 'list-class',
  noTasks: 'no-tasks-class',
};

describe('TaskList.vue', () => {
  let store;
  let getters;
  let actions;

  it('renders correctly with no tasks', () => {
    getters = {
      filteredTasks: () => [],
    };

    actions = {
      updateTaskOrder: jest.fn(),
    };

    store = createStore({
      getters,
      actions,
    });

    const wrapper = shallowMount(TaskList, {
      global: {
        plugins: [store],
        mocks: {
          $style: styles,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders correctly with tasks', () => {
    getters = {
      filteredTasks: () => [
        {
          id: 1,
          text: 'Task 1',
          completed: false,
        },
        {
          id: 2,
          text: 'Task 2',
          completed: true,
        },
      ],
    };

    store = createStore({
      getters,
    });

    const wrapper = shallowMount(TaskList, {
      global: {
        plugins: [store],
        mocks: {
          $style: styles,
        },
        stubs: {
          TaskItem,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.findAllComponents(TaskItem)).toHaveLength(2);
  });

  it('calls onDrop method and updates task order', () => {
    getters.filteredTasks = () => [
      {
        id: 1,
        text: 'Task 1',
        completed: false,
      },
      {
        id: 2,
        text: 'Task 2',
        completed: true,
      },
    ];

    store = createStore({
      getters,
      actions,
    });

    const wrapper = shallowMount(TaskList, {
      global: {
        plugins: [store],
        mocks: {
          $style: styles,
        },
        stubs: {
          TaskItem,
        },
      },
    });

    wrapper.vm.onDrop(1, 2);

    expect(actions.updateTaskOrder).toHaveBeenCalled();
    expect(actions.updateTaskOrder).toHaveBeenCalledWith(expect.any(Object), [
      {
        id: 2,
        text: 'Task 2',
        completed: true,
      },
      {
        id: 1,
        text: 'Task 1',
        completed: false,
      },
    ]);
  });
});
