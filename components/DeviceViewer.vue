<script lang="ts">
import Vue, { CreateElement } from 'vue';
import $ from 'jquery';
import { store } from '~/store';
import PageBuilderStore from '~/store/pageBuilder';
import { Component } from '~/node_modules/nuxt-property-decorator';
import ComponentViewer from '~/components/ComponentViewer.vue';

@Component
export default class DeviceViewer extends Vue {
  iApp: any = null;

  get components() {
    return PageBuilderStore.components;
  }

  render(h: CreateElement) {
    return h('iframe', {
      on: {
        load: this.renderChildren,
        error: this.renderChildren
      }
    });
  }

  renderChildren() {
    const iframeContentDocument = (this.$el as HTMLIFrameElement).contentDocument;

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
        '<link data-n-head="ssr" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">'
      );

      // We will mount or nested app to this element
      const el = document.createElement('div');
      $(body).append(el);

      const IApp = new Vue({
        name: 'IApp',
        store,
        render(createElement: CreateElement) {
          return createElement(ComponentViewer, {
            props: {
              components: PageBuilderStore.components
            }
          });
        }
      });

      IApp.$mount(el);

      this.iApp = IApp;
    }
  }
}
</script>
