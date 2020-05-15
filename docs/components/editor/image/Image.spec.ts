import { mount, Wrapper } from '@vue/test-utils';
import Image from '~/components/editor/image/Image.vue';
import { EditableImageProps } from '~/components/editor/image/types';
import PopupModal from '~/components/PopupModal.vue';
import ClickOutside from '~/directives/click-outside';
import ImageToolbar from '~/components/editor/image/ImageToolbar.vue';

const createWrapper = (propsData: EditableImageProps) => {
  return mount(Image, {
    propsData: { value: propsData, editable: true },
    stubs: {
      PopupModal,
      ImageToolbar
    },
    directives: {
      ClickOutside
    }
  });
};

describe('Image.vue', () => {
  let wrapper: Wrapper<Image & { [key: string]: any }>;

  beforeEach(() => {
    wrapper = createWrapper({
      alt: 'Stock Image',
      src: './icon.png'
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('has the expected html structure with link', () => {
    wrapper = createWrapper({
      alt: 'Click Here',
      src: './click-here.png',
      href: 'http://www.bulmabuildingblocks.com/'
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('toggle model toggles correctly', () => {
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
    // Check button and check popup is shown
    await wrapper.find('img').trigger('click');
    expect(wrapper.find('.popup').exists()).toBeTruthy();

    // Check button and check popup is hidden
    await wrapper.find('.card-header-icon').trigger('click');

    expect(wrapper.find('.popup').exists()).toBeFalsy();
    // Check button and check popup is shown
    await wrapper.find('img').trigger('click');

    expect(wrapper.find('.popup').exists()).toBeTruthy();
    // Check button and check popup is hidden
    await wrapper.find('img').trigger('click');
    expect(wrapper.find('.popup').exists()).toBeFalsy();
  });
});
