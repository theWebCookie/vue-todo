import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import AppHeader from '../AppHeader.vue';

describe('AppHeader.vue', () => {
  it('renders correctly and matches the snapshot', () => {
    const $style = {
      header: 'header',
    };

    const wrapper = shallowMount(AppHeader, {
      mocks: {
        $style,
      },
    });

    const headerElement = wrapper.find('header');
    expect(headerElement.exists()).toBe(true);
    expect(headerElement.classes()).toContain($style.header);
    expect(wrapper.element).toMatchSnapshot();
  });
});
