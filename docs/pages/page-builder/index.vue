<template>
  <section id="page-builder" class="page-builder">
    <div class="page-builder__header level is-marginless">
      <div class="level-left">
        <div class="level-item">
          <a
            class="button is-small is-outlined"
            @click.prevent="handleBack('/')"
            >Back</a
          >
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button
            class="button is-small is-primary copy-code"
            @click="downloadCode"
          >
            Download
          </button>
        </div>
      </div>
    </div>
    <div class="page-builder__editor">
      <div class="page-builder__container">
        <div class="page-builder__blocks">
          <div class="page-builder__blocks__filters">
            <div class="field has-addons is-fullwidth is-marginless">
              <div v-for="(item, key) in allBlocks" :key="key" class="control">
                <button
                  class="button is-small"
                  :class="{ 'is-primary': shownBlocks === key }"
                  @click="shownBlocks = key"
                >
                  {{ key | capitalize }}
                </button>
              </div>
            </div>
          </div>
          <div class="page-builder__blocks__selector">
            <draggable
              class="page-builder__items"
              :group="{
                name: 'content',
                pull: 'clone',
                put: false,
                sort: false
              }"
              :sort="false"
              :list="allBlocks[shownBlocks]"
            >
              <div
                v-for="component in allBlocks[shownBlocks]"
                :key="component.name"
                class="is-fullwidth page-builder__item"
                @click="addComponentToPreview(component)"
              >
                <img :src="componentImageUrl(component.title)" />
              </div>
            </draggable>
          </div>
        </div>

        <div class="page-builder__viewer" :class="`is-${deviceSize}`">
          <div class="page-builder__options is-fullwidth">
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
              </div>
              <div class="level-right">
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
            </div>
          </div>
          <div class="page-builder__viewer-frame">
            <div class="page-builder__viewer-frame__iframe">
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

import { Component, mixins, Watch } from 'nuxt-property-decorator';
import slugifyString from '~/shared/slugifyString';

import allBlocks from '~/html-blocks';

import DeviceViewer from '~/components/DeviceViewer.vue';
import PageBuilderStore from '~/store/pageBuilder';
import { Block } from '~/types/Block';
import HandleBack from '~/mixins/HandleBack';

@Component({
  components: {
    draggable,
    DeviceViewer
  }
})
export default class PageBuilderPage extends mixins(HandleBack) {
  allBlocks = allBlocks;
  shownBlocks = 'headers';
  deviceSize = 'desktop';
  deviceFrame = true;

  get layout() {
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

  downloadCode(): void {
    PageBuilderStore.setDownloadingCode();
  }
}
</script>
