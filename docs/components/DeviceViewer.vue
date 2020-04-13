<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue';
import $ from 'jquery';
import { Component } from 'nuxt-property-decorator';
import { store } from '~/store';
import PageBuilder from '~/components/PageBuilder.vue';

@Component
export default class DeviceViewer extends Vue {
  iApp?: Vue = undefined;

  render(h: CreateElement): VNode {
    const renderComponent = PageBuilder;
    const attrs = this.$attrs;

    return h('iframe', {
      on: {
        load: (): void => {
          const iframeContentDocument = (this.$el as HTMLIFrameElement)
            .contentDocument;

          if (iframeContentDocument) {
            const head = iframeContentDocument.head;
            const body = iframeContentDocument.body;
            const headStyleContent = $('head style').clone();

            // Add all of the pages style tags also to the iframe
            if (headStyleContent) {
              $(head).append(headStyleContent);
            }

            // Add Google Fonts
            $(head).append(
              '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">'
            );

            // We will mount or nested app to this element
            const el = document.createElement('div');
            $(body).append(el);

            const IApp = new Vue({
              name: 'IApp',
              store,
              render(createElement: CreateElement): VNode {
                return createElement(renderComponent, {
                  props: attrs // Direction pass through the attributes to the component in the iframe
                });
              }
            });

            IApp.$mount(el);

            this.iApp = IApp;
          }
        }
      }
    });
  }
}
</script>
