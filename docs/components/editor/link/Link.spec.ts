import { mount, Wrapper } from '@vue/test-utils';
import ButtonToolbar from './LinkToolbar.vue';
import Link from '~/components/editor/link/Link.vue';
import { EditableLinkProps, LinkType } from '~/components/editor/link/types';
import { Status } from '~/shared/config';
import PopupModal from '~/components/PopupModal.vue';
import ClickOutside from '~/directives/click-outside';

const createWrapper = (propsData: EditableLinkProps) => {
  return mount(Link, {
    propsData: { value: propsData, editable: true },
    stubs: {
      transition: false, // fixes error when using transition component
      PopupModal,
      ButtonToolbar
    },
    directives: {
      ClickOutside
    }
  });
};

describe('Link.vue', () => {
  let wrapper: Wrapper<Link & { [key: string]: any }>;

  beforeEach(() => {
    // Mount the component
    wrapper = createWrapper({
      label: '',
      linkType: LinkType.Link
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

  test('correct color class returned in linkClasses', async () => {
    wrapper = createWrapper({
      label: '',
      status: Status.None,
      linkType: LinkType.Link
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.linkClasses).not.toContain('has-text-none');
    expect(wrapper.vm.linkClasses).not.toContain('is-none');

    wrapper = createWrapper({
      label: '',
      status: Status.Primary,
      linkType: LinkType.Link
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.linkClasses).toContain('has-text-primary');

    wrapper = createWrapper({
      label: '',
      status: Status.Primary,
      linkType: LinkType.Button
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.linkClasses).toContain('is-primary');

    wrapper = createWrapper({
      label: '',
      status: Status.Dark,
      linkType: LinkType.Outlined
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.linkClasses).toContain('is-dark');
  });

  test('toggle model toggles', () => {
    wrapper.vm.toggleModal(new Event('clicked'));
    expect(wrapper.vm.modalOpen).toEqual(true);
    wrapper.vm.toggleModal(new Event('clicked'));
    expect(wrapper.vm.modalOpen).toEqual(false);
  });

  test('close modal function', () => {
    expect(typeof wrapper.vm.closeModal).toBe('function');

    wrapper.vm.closeModal();
    expect(wrapper.vm.modalOpen).toEqual(false);
  });

  test('open and close popup toolbar', async () => {
    wrapper = createWrapper({
      label: 'button text',
      status: Status.Primary,
      linkType: LinkType.Button
    });

    // Check button and check popup is shown
    await wrapper.find('.button').trigger('click');
    expect(wrapper.find('.popup').exists()).toBeTruthy();

    // Check button and check popup is hidden
    await wrapper.find('.card-header-icon').trigger('click');
    expect(wrapper.find('.popup').exists()).toBeFalsy();

    // Check button and check popup is shown
    await wrapper.find('.button').trigger('click');
    expect(wrapper.find('.popup').exists()).toBeTruthy();

    // Check button and check popup is hidden
    await wrapper.find('span > a.button').trigger('click');
    expect(wrapper.find('.popup').exists()).toBeFalsy();
  });
});
