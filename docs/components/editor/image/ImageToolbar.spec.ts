import { shallowMount, Wrapper } from '@vue/test-utils';
import ImageToolbar from '~/components/editor/image/ImageToolbar.vue';
import { EditableImageProps } from '~/components/editor/image/types';

describe('ImageToolbar.vue', () => {
  let wrapper: Wrapper<ImageToolbar & { [key: string]: any }>;

  beforeEach(() => {
    // Mount the component
    const props: EditableImageProps = {
      alt: '',
      src: ''
    };

    wrapper = shallowMount(ImageToolbar, {
      propsData: { value: props }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  // Inspect the raw component options
  test('has a close modal function', () => {
    expect(typeof wrapper.vm.closeModal).toBe('function');
  });

  // Emit event from close modal
  test('has a close modal function', async () => {
    // call function to emit event
    wrapper.vm.closeModal();

    await wrapper.vm.$nextTick(); // Wait until $emits have been handled

    expect(wrapper.emitted().closeModal).toBeTruthy();
  });
});
