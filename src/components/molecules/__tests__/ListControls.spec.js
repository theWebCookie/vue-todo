import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { createStore } from 'vuex';
import ListControls from '../ListControls.vue';
import { jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/vue';

const styles = {
  controls: 'controls',
  filterButtons: 'filterButtons',
  filterButton: 'filterButton',
  clearButton: 'clearButton',
  clearButtonStyle: 'clearButtonStyle',
};

const numberOfTasksLeft = 5;

describe('ListControls.vue', () => {
  let store;
  let getters;
  let actions;

  beforeEach(() => {
    actions = {
      setFilter: jest.fn(),
      clearCompletedTasks: jest.fn(),
    };

    getters = {
      tasksLeft: () => numberOfTasksLeft,
    };

    store = createStore({
      getters,
      actions,
    });
  });

  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(ListControls, {
      global: {
        plugins: [store],
        mocks: {
          $style: styles,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('displays the correct task count message', () => {
    const wrapper = shallowMount(ListControls, {
      global: {
        plugins: [store],
        mocks: {
          $style: styles,
        },
      },
    });

    const taskCountMessage = wrapper.find('span').text();
    expect(taskCountMessage).toBe(`${numberOfTasksLeft} tasks left`);
  });

  it('dispatches the correct action when a filter button is clicked', async () => {
    const { getByText } = render(ListControls, {
      global: {
        plugins: [store],
      },
    });

    const activeFilterButton = getByText('Active');
    await fireEvent.click(activeFilterButton);
    expect(actions.setFilter).toHaveBeenCalledWith(expect.any(Object), 'active');
  });

  it('dispatches the clearCompletedTasks action when the clear completed button is clicked', async () => {
    const { getByText } = render(ListControls, {
      global: {
        plugins: [store],
      },
    });

    const clearButton = getByText('Clear Completed');
    await fireEvent.click(clearButton);
    expect(actions.clearCompletedTasks).toHaveBeenCalled();
  });
});
