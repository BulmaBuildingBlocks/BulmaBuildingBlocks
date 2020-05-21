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
            :disabled="downloadDisabled"
            @click="copyCode"
          >
            Copy HTML
          </button>
        </div>
        <div class="level-item">
          <button
            class="button is-small is-primary copy-code"
            :disabled="downloadDisabled"
            @click="downloadCode"
          >
            Download Website
          </button>
        </div>
      </div>
    </div>
    <div class="page-builder__editor">
      <div class="page-builder__container">
        <div class="page-builder__blocks">
          <div class="page-builder__blocks__filters">
            <b-field>
              <b-select
                v-model="shownBlocks"
                size="is-small"
                expanded
                placeholder="Select a name"
                required
              >
                <option
                  v-for="(item, key) in allBlocks"
                  :key="key"
                  :value="key"
                >
                  {{ routes.get('html-blocks/' + key).title | capitalize }}
                </option>
              </b-select>
            </b-field>
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
                <img
                  :src="componentImageUrl(component)"
                  :alt="component.title"
                />
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
import HandleBack from '~/mixins/HandleBack';
import routes from '~/data/routes';
import { Block, ContentTypes } from '~/html-blocks/types';

@Component({
  components: {
    draggable,
    DeviceViewer
  }
})
export default class PageBuilderPage extends mixins(HandleBack) {
  allBlocks = allBlocks;
  shownBlocks = ContentTypes.Headers;
  deviceSize = 'desktop';
  deviceFrame = true;
  routes = routes;

  get layout() {
    return 'empty';
  }

  get downloadDisabled() {
    return PageBuilderStore.blocks.length <= 0;
  }

  componentImageUrl(block: Block): string {
    return require(`~/assets/component-images/${slugifyString(
      `${block.title} - ${block.type}`
    )}.png`);
  }

  addComponentToPreview(component: Block): void {
    PageBuilderStore.addBlock(component);
  }

  @Watch('editable')
  onEditableChange(editable: boolean): void {
    PageBuilderStore.toggleEditable(editable);
  }

  copyCode(): void {
    PageBuilderStore.setExportCode({ copying: true, download: false });
  }

  downloadCode(): void {
    PageBuilderStore.setExportCode({ copying: true, download: true });
  }
}
</script>
