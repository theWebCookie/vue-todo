import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import TextInput from '../TextInput.vue';
import { render, fireEvent } from '@testing-library/vue';

describe('TextInput.vue', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      addTask: jest.fn(),
    };

    store = createStore({
      actions,
    });
  });

  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(TextInput, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            searchBar: 'searchBar',
          },
        },
      },
      props: {
        placeholder: 'Add new task',
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders with default placeholder', () => {
    const wrapper = shallowMount(TextInput, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            searchBar: 'searchBar',
          },
        },
      },
    });

    const input = wrapper.find('input');
    expect(input.attributes('placeholder')).toBe('Add your task');
  });

  it('emits an action to add a task when Enter is pressed', async () => {
    const wrapper = shallowMount(TextInput, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            searchBar: 'searchBar',
          },
        },
      },
    });

    await wrapper.setData({ inputValue: 'New Task' });
    await wrapper.find('input').trigger('keyup.enter');

    expect(actions.addTask).toHaveBeenCalledWith(expect.any(Object), {
      id: expect.any(Number),
      title: 'New Task',
      completed: false,
    });

    expect(wrapper.vm.inputValue).toBe('');
  });

  it('does not add a task if input is empty or whitespace', async () => {
    const { getByPlaceholderText } = render(TextInput, {
      global: {
        plugins: [store],
      },
    });

    const input = getByPlaceholderText('Add your task');
    await fireEvent.update(input, '   ');
    await fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
    expect(actions.addTask).not.toHaveBeenCalled();
  });
});
