import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import AppButton from '../AppButton.vue';

describe('AppButton.vue', () => {
  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(AppButton, {
      props: {
        customClass: 'custom-class',
      },
      slots: {
        default: 'Click Me',
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
