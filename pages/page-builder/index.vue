<template>
  <section id="page-builder" class="page-builder">
    <div class="page-builder__container">
      <div class="columns is-gapless">
        <div class="column">
          <div class="page-builder__component-list">
            <div class="level is-marginless">
              <div class="level-left">
                <div class="level-item">
                  <p class="title is-4">
                    Page Builder
                  </p>
                </div>
                <nuxt-link to="/" exact class="is-size-7 has-text-weight-bold">
                  Back
                </nuxt-link>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <button class="button is-small is-primary copy-code" @click="copyCode">Copy</button>
                </div>
              </div>
            </div>
            <hr />
            <draggable
              class="page-builder__component-list__items"
              :group="{ name: 'content', pull: 'clone', put: false, sort: false }"
              :sort="false"
              :list="components"
            >
              <div
                v-for="component in components"
                :key="component.name"
                class="is-fullwidth page-builder__component-list__item"
                @click="addComponentToPreview(component)"
              >
                <component :is="component.component" v-bind="component" />
              </div>
            </draggable>
          </div>
        </div>
        <div class="column is-narrow has-background-light page-builder__viewer" :class="`is-${deviceSize}`">
          <div class="page-builder__device-options">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <b-field>
                    <b-radio-button v-model="deviceSize" native-value="mobile" size="is-small">
                      Mobile
                    </b-radio-button>

                    <b-radio-button v-model="deviceSize" native-value="tablet" size="is-small">
                      Tablet
                    </b-radio-button>

                    <b-radio-button v-model="deviceSize" native-value="desktop" size="is-small">
                      Desktop
                    </b-radio-button>
                  </b-field>
                </div>
                <div class="level-item">
                  <b-field>
                    <b-switch v-model="showComponents">
                      <span class="label is-small is-nowrap">Container Spacing</span>
                    </b-switch>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
          <div class="page-builder__iframe" :class="`is-${deviceSize}`">
            <client-only>
              <device-viewer :component="ComponentViewer" />
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import draggable from 'vuedraggable';

import { Component, Vue, Watch } from 'nuxt-property-decorator';

import allComponents from '~/html-snippets';

import ComponentViewer from '~/components/ComponentViewer.vue';
import DeviceViewer from '~/components/DeviceViewer.vue';
import PageBuilderStore from '~/store/pageBuilder';

@Component({
  components: {
    draggable,
    DeviceViewer
  }
})
export default class PageBuilder extends Vue {
  components = allComponents;
  deviceSize = 'desktop';
  showComponents = PageBuilderStore.showComponents;

  ComponentViewer = ComponentViewer;

  get layout() {
    return 'empty';
  }

  @Watch('showComponents')
  onShowComponentsChange(value: boolean) {
    PageBuilderStore.toggleShowComponent(value);
  }

  addComponentToPreview(component: any) {
    PageBuilderStore.addComponent(component);
  }

  async copyCode() {
    try {
      await this.$copyText(PageBuilderStore.code).then(() => {
        this.$buefy.toast.open('Copied to clipboard!');
      });
    } catch (e) {
      this.$buefy.toast.open({
        message: 'Error while copying to clipboard :(',
        type: 'is-danger'
      });
    }
  }
}
</script>
