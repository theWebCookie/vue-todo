import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import InputCheckbox from '../InputCheckbox.vue';

describe('InputCheckbox.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      actions: {
        toggleTask: jest.fn(),
      },
    });
  });

  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(InputCheckbox, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            label: 'label-class',
            checkBox: 'checkBox-class',
            checked: 'checked-class',
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
            label: 'label-class',
            checkBox: 'checkBox-class',
            checked: 'checked-class',
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
            label: 'label-class',
            checkBox: 'checkBox-class',
            checked: 'checked-class',
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

  it('emits change event when toggleTask is called', () => {
    const wrapper = shallowMount(InputCheckbox, {
      global: {
        plugins: [store],
        mocks: {
          $style: {
            label: 'label-class',
            checkBox: 'checkBox-class',
            checked: 'checked-class',
          },
        },
      },
      props: {
        checked: false,
        disabled: true,
        id: 1,
      },
    });

    const taskId = 1;
    wrapper.vm.toggleTask(taskId);
    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change[0]).toEqual([taskId]);
  });
});
