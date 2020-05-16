import { mount, Wrapper } from '@vue/test-utils';

import EditableContent from '~/components/editor/content/Content.vue';
import {
  EditableContentProps,
  EditableContentTypes
} from '~/components/editor/content/types';
import WiziwigContent from '~/components/editor/content/WiziwigContent.vue';

const createWrapper = (
  propsData: EditableContentProps
): Wrapper<EditableContent & { [key: string]: any }> => {
  const WrappedContent = {
    template: `
         <div>
          <editable-content
            v-bind="$attrs"
            v-on="$listeners"
          />
        </div>
      `
  };

  return mount(WrappedContent, {
    inheritAttrs: false,
    propsData,
    stubs: {
      transition: false, // fixes error when using transition component
      EditableContent
    }
  });
};

describe('Test.vue', () => {
  let wrapper: Wrapper<EditableContent & { [key: string]: any }>;

  afterEach(() => {
    wrapper.destroy();
  });

  it('Check render function provides the static component', () => {
    wrapper = createWrapper({
      tag: 'h3',
      type: EditableContentTypes.Text,
      value: 'This is a test string',
      editable: false
    });

    expect(wrapper.findAll('h3')).toHaveLength(1);
    expect(wrapper.find('.editor').exists()).toBeFalsy();
  });

  it('Check correct string is shown in the static component', () => {
    const testString = 'This is a test string';

    wrapper = createWrapper({
      tag: 'h3',
      type: EditableContentTypes.Text,
      value: testString,
      editable: false
    });

    // Check if passed string is there
    expect(wrapper.text()).toBe(testString);
  });

  it('Check render function provides the editable component', () => {
    wrapper = createWrapper({
      tag: 'h3',
      type: EditableContentTypes.Text,
      value: 'This is a test string',
      editable: true
    });

    expect(wrapper.find('.editor').element.tagName).toBe('H3');
    expect(wrapper.find('.editor').exists()).toBeTruthy();
  });

  it('Check correct string is shown in the editable component', async () => {
    const testString = 'This is a test string';

    wrapper = createWrapper({
      tag: 'h3',
      type: EditableContentTypes.Text,
      value: testString,
      editable: true
    });

    await wrapper.vm.$nextTick();

    // Check if passed string is there
    expect(wrapper.text()).toBe(testString);
  });

  it('Check that a div is the default tag if none is provided', () => {
    wrapper = createWrapper({
      type: EditableContentTypes.Text,
      value: 'This is a test string',
      editable: true
    });

    expect(wrapper.find('.editor').element.tagName).toBe('DIV');
  });

  it('Check that default type is text if none is provided', () => {
    wrapper = createWrapper({
      value: 'This is a test string',
      editable: true
    });

    // Check if passed string is there
    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('Check that a text is the default tag if none is provided', () => {
    wrapper = createWrapper({
      value: 'This is a test string',
      editable: true
    });

    // Check if passed string is there
    expect((wrapper.findComponent(WiziwigContent).vm as any).type).toBe('text');
  });

  it('Check that tag correctly provided', () => {
    wrapper = createWrapper({
      type: EditableContentTypes.Text,
      value: 'This is a test string',
      editable: true
    });

    // Check if passed string is there
    expect((wrapper.findComponent(WiziwigContent).vm as any).type).toBe('text');

    wrapper = createWrapper({
      type: EditableContentTypes.Title,
      value: 'This is a test string',
      editable: true
    });

    // Check if passed string is there
    expect((wrapper.findComponent(WiziwigContent).vm as any).type).toBe(
      'title'
    );
  });
});
