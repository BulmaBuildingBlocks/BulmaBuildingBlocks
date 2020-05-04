<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue';
import $ from 'jquery';
import { Component } from 'nuxt-property-decorator';
import packageJson from '@@/package.json';
import { store } from '~/store';
import PageBuilder from '~/components/PageBuilder.vue';

@Component
export default class DeviceViewer extends Vue {
  version = packageJson.version;
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

            // Add Google Fonts
            $(head).append(
              '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">',
              `<link rel="stylesheet" type="text/css" href="https://unpkg.com/bulmabuildingblocks@${this.version}/dist/bulmabuildingblocks.min.css">`
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
