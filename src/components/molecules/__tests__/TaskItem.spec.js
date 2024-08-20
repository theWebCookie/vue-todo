import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import TaskItem from '../TaskItem.vue';
import { render, fireEvent } from '@testing-library/vue';
import { createStore } from 'vuex';
import { jest } from '@jest/globals';

const styles = {
  taskItem: 'taskItem',
  taskItemText: 'taskItemText',
  taskItemCheckbox: 'taskItemCheckbox',
};

describe('TaskItem.vue', () => {
  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(TaskItem, {
      global: {
        mocks: {
          $style: styles,
        },
      },
      props: {
        task: {
          id: 1,
          title: 'Task 1',
          completed: false,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain(styles.taskItem);
    const label = wrapper.find('label');
    expect(label.text()).toBe('Task 1');
  });

  it('renders with checked state', () => {
    const wrapper = shallowMount(TaskItem, {
      global: {
        mocks: {
          $style: styles,
        },
      },
      props: {
        task: {
          id: 1,
          title: 'Task 1',
          completed: true,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain(styles.taskItem);
    expect(wrapper.props('task').title).toBe('Task 1');
    expect(wrapper.props('task').completed).toBe(true);
  });

  it('calls removeTask method when delete button is clicked', async () => {
    const task = { id: 1, title: 'Test Task', completed: false };

    let store;
    let actions = {
      removeTask: jest.fn(),
    };

    store = createStore({
      actions,
    });

    const { getByText } = render(TaskItem, {
      global: {
        plugins: [store],
      },
      props: {
        task,
      },
    });

    const deleteButton = getByText('X');
    await fireEvent.click(deleteButton);
    expect(actions.removeTask).toHaveBeenCalledWith(expect.any(Object), 1);
  });
});
