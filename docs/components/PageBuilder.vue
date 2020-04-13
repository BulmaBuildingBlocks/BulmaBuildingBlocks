<template>
  <div>
    <draggable
      ref="pageHtml"
      class="component-viewer-list"
      :group="{ name: 'content', put: editable, sort: editable }"
      :list="blocks"
    >
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="component-viewer-item"
      >
        <div v-if="editable" class="component-viewer-item__options">
          <div class="buttons">
            <button
              class="button is-danger"
              @click="deleteComponentItem(block)"
            >
              Delete
            </button>
          </div>
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

@Component({
  components: {
    ...blocks,
    draggable
  }
})
export default class ComponentViewer extends Vue {
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

  deleteComponentItem(block: Block): void {
    PageBuilderStore.removeBlock(block);
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
    }

    await PageBuilderStore.toggleEditable(true);
    await PageBuilderStore.setDownloadingCode(false);
  }
}
</script>
