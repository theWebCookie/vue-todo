import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import AddInput from '../AddInput.vue';
import InputCheckbox from '../../atoms/InputCheckbox.vue';
import TextInput from '../../atoms/TextInput.vue';

describe('AddInput.vue', () => {
  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(AddInput, {
      global: {
        mocks: {
          $style: {
            inputWrapper: 'inputWrapper',
          },
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders InputCheckbox and TextInput components with default props', () => {
    const wrapper = shallowMount(AddInput, {
      global: {
        mocks: {
          $style: {
            inputWrapper: 'inputWrapper',
          },
        },
      },
    });

    const inputCheckbox = wrapper.findComponent(InputCheckbox);
    const textInput = wrapper.findComponent(TextInput);

    expect(inputCheckbox.exists()).toBe(true);
    expect(inputCheckbox.props('disabled')).toBe(true);
    expect(inputCheckbox.props('checked')).toBe(false);

    expect(textInput.exists()).toBe(true);
    expect(textInput.props('placeholder')).toBe('Add your task');
  });
});
