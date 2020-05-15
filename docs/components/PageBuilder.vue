<template>
  <div>
    <draggable
      ref="pageHtml"
      class="block-viewer-list"
      :group="{ name: 'content', put: editable, sort: editable }"
      :list="blocks"
    >
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="block-viewer-item"
      >
        <div v-if="editable" class="block-viewer-item__options">
          <b-field addons>
            <b-field>
              <color-picker
                :color="block.color"
                size="is-small"
                @color="block.color = $event"
              />
            </b-field>
            <b-field>
              <button
                class="button is-white is-small"
                @click="moveBlockItem(block, -1)"
              >
                <b-icon pack="fa" icon="angle-up" />
              </button>
            </b-field>
            <b-field>
              <button
                class="button is-white is-small"
                @click="moveBlockItem(block, 1)"
              >
                <b-icon pack="fa" icon="angle-down" />
              </button>
            </b-field>
            <b-field>
              <button
                class="button is-danger is-small"
                @click="deleteBlockItem(block)"
              >
                Delete
              </button>
            </b-field>
          </b-field>
        </div>
        <component
          :is="block.component"
          ref="myTextEditorHtml"
          :block="block"
          :editable="editable"
        />
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable';
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import { blocks } from '~/html-blocks';
import PageBuilderStore from '~/store/pageBuilder';
import { Block } from '~/types/Block';
import ColorPicker from '~/components/ColorPicker.vue';

@Component({
  components: {
    ...blocks,
    draggable,
    ColorPicker
  }
})
export default class PageBuilder extends Vue {
  $refs!: {
    myTextEditorHtml: Vue[];
  };

  get blocks(): Block[] {
    return PageBuilderStore.blocks;
  }

  get editable(): boolean {
    return PageBuilderStore.editable;
  }

  get copyingCode(): boolean {
    return PageBuilderStore.downloadingCode;
  }

  deleteBlockItem(block: Block): void {
    PageBuilderStore.removeBlock(block);
  }

  moveBlockItem(block: Block, direction: number): void {
    PageBuilderStore.moveBlock({ block, direction });
  }

  @Watch('copyingCode', { deep: true })
  async updateCode(): Promise<void> {
    /***
     * Only run if copyingCode is externally changed to true
     * Only way i could get the value of the ref elements
     */

    if (PageBuilderStore.downloadingCode && PageBuilderStore.blocks.length) {
      await PageBuilderStore.toggleEditable(false);

      await this.$nextTick();

      // Get and copy html content
      const htmlContent = this.$refs.myTextEditorHtml.reduce(
        (accumulator: string, currentValue: Vue) => {
          return accumulator + currentValue.$el.outerHTML;
        },
        ''
      );
      await PageBuilderStore.setCode(htmlContent);

      await this.$nextTick();

      await PageBuilderStore.downloadCode();
    }

    await PageBuilderStore.toggleEditable(true);
    await PageBuilderStore.setDownloadingCode(false);
  }
}
</script>
