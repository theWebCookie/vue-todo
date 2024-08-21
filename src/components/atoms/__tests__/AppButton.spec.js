import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import AppButton from '../AppButton.vue';
import { render, fireEvent } from '@testing-library/vue';

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

  it('emits a click event when button is clicked', async () => {
    const { getByRole, emitted } = render(AppButton);

    const button = getByRole('button');
    await fireEvent.click(button);

    expect(emitted()).toHaveProperty('click');
    expect(emitted().click.length).toBe(2);
  });

  it('applies the active class when isActive is true', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        isActive: true,
      },
    });
    expect(wrapper.classes()).toContain('active');
  });

  it('does not apply the active class when isActive is false', () => {
    const wrapper = shallowMount(AppButton, {
      propsData: {
        isActive: false,
      },
    });
    expect(wrapper.classes()).not.toContain('active');
  });
});
