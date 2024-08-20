import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import InputCheckbox from '../InputCheckbox.vue';

describe('InputCheckbox.vue', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      toggleTask: jest.fn(),
    };

    store = createStore({
      actions,
    });
  });

  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(InputCheckbox, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            checkBox: 'checkBox',
          },
        },
      },
      props: {
        checked: false,
        disabled: false,
        id: 1,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders with checked state', () => {
    const wrapper = shallowMount(InputCheckbox, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            checkBox: 'checkBox',
          },
        },
      },
      props: {
        checked: true,
        disabled: false,
        id: 1,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders with disabled state', () => {
    const wrapper = shallowMount(InputCheckbox, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            checkBox: 'checkBox',
          },
        },
      },
      props: {
        checked: false,
        disabled: true,
        id: 1,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('calls toggleTask when checkbox changes', async () => {
    const wrapper = shallowMount(InputCheckbox, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            checkBox: 'checkBox',
          },
        },
      },
      props: {
        checked: false,
        disabled: false,
        id: 1,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked(true);
    expect(actions.toggleTask).toHaveBeenCalledWith(expect.any(Object), 1);
  });

  it('does not call toggleTask when checkbox is disabled', async () => {
    const wrapper = shallowMount(InputCheckbox, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            checkBox: 'checkBox',
          },
        },
      },
      props: {
        checked: false,
        disabled: true,
        id: 1,
      },
    });

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked(true);
    expect(actions.toggleTask).not.toHaveBeenCalled();
  });
});
