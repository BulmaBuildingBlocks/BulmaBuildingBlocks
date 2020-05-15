import { shallowMount, Wrapper } from '@vue/test-utils';
import LinkToolbar from '~/components/editor/link/LinkToolbar.vue';
import { EditableLinkProps, LinkType } from '~/components/editor/link/types';

describe('LinkToolbar.vue', () => {
  let wrapper: Wrapper<LinkToolbar & { [key: string]: any }>;

  beforeEach(() => {
    // Mount the component
    const props: EditableLinkProps = {
      label: '',
      linkType: LinkType.Link
    };

    wrapper = shallowMount(LinkToolbar, {
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
