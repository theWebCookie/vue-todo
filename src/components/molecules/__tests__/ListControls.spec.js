import { shallowMount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from '@jest/globals';
import { createStore } from 'vuex';
import ListControls from '../ListControls.vue';

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

  beforeEach(() => {
    getters = {
      tasksLeft: () => numberOfTasksLeft,
    };

    store = createStore({
      getters,
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
});
