<template>
  <section id="page-builder" class="page-builder">
    <div class="page-builder__container">
      <div class="columns is-gapless">
        <div class="column">
          <div class="page-builder__component-list">
            <div
              class="page-builder__component-list__header level is-marginless"
            >
              <div class="level-left">
                <div class="level-item">
                  <nuxt-link to="/" exact class="button is-small is-primary">
                    Back
                  </nuxt-link>
                </div>
                <div class="level-item">
                  <p class="title is-4">
                    Page Builder
                  </p>
                </div>
              </div>
            </div>
            <draggable
              class="page-builder__component-list__items"
              :group="{
                name: 'content',
                pull: 'clone',
                put: false,
                sort: false
              }"
              :sort="false"
              :list="components"
            >
              <div
                v-for="component in components"
                :key="component.name"
                class="is-fullwidth page-builder__component-list__item"
                @click="addComponentToPreview(component)"
              >
                <img :src="componentImageUrl(component.title)" />
              </div>
            </draggable>
          </div>
        </div>
        <div class="column is-narrow">
          <div
            class="has-background-grey-lighter page-builder__viewer"
            :class="`is-${deviceSize}`"
          >
            <div class="page-builder__device-options is-fullwidth">
              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <b-field>
                      <b-radio-button
                        v-model="deviceSize"
                        native-value="mobile"
                        size="is-small"
                      >
                        Mobile
                      </b-radio-button>

                      <b-radio-button
                        v-model="deviceSize"
                        native-value="tablet"
                        size="is-small"
                      >
                        Tablet
                      </b-radio-button>

                      <b-radio-button
                        v-model="deviceSize"
                        native-value="desktop"
                        size="is-small"
                      >
                        Desktop
                      </b-radio-button>
                    </b-field>
                  </div>
                  <div class="level-item">
                    <b-field>
                      <b-switch v-model="deviceFrame">
                        <span class="label is-small is-nowrap"
                          >Show Device Frame</span
                        >
                      </b-switch>
                    </b-field>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <button
                      class="button is-small is-primary copy-code"
                      @click="copyCode"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-builder__viewer__iframe">
              <div
                class="page-builder__iframe"
                :class="[
                  `is-${deviceSize}`,
                  { 'has-device-frame': deviceFrame }
                ]"
              >
                <client-only>
                  <device-viewer />
                </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import draggable from 'vuedraggable';

import { Component, Vue, Watch } from 'nuxt-property-decorator';
import slugifyString from '~/shared/slugifyString';

// import html2canvas from 'html2canvas';
import allComponents from '~/html-blocks';

import DeviceViewer from '~/components/DeviceViewer.vue';
import PageBuilderStore from '~/store/pageBuilder';
import { Block } from '~/types/Block';

@Component({
  components: {
    draggable,
    DeviceViewer
  }
})
export default class PageBuilderPage extends Vue {
  components = allComponents;
  deviceSize = 'desktop';
  deviceFrame = false;

  get layout(): string {
    return 'empty';
  }

  componentImageUrl(title: string): string {
    return require(`~/assets/component-images/${slugifyString(title)}.png`);
  }

  addComponentToPreview(component: Block): void {
    PageBuilderStore.addBlock(component);
  }

  @Watch('editable')
  onEditableChange(editable: boolean): void {
    PageBuilderStore.toggleEditable(editable);
  }

  copyCode(): void {
    try {
      PageBuilderStore.setCopyingCode(true);
    } catch (e) {
      this.$buefy.toast.open({
        message: 'Error while copying to clipboard :(',
        type: 'is-danger'
      });
    }
  }
}
</script>
