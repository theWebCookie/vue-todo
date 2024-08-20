import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import MainContent from '../MainContent.vue';

const styles = {
  layout: 'layout-class',
  title: 'title-class',
  heading: 'heading-class',
  moon: 'moon-class',
};

describe('MainContent.vue', () => {
  it('renders correctly and matches the snapshot', () => {
    const wrapper = shallowMount(MainContent, {
      global: {
        provide: {
          $style: styles,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
