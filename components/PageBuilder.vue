<template>
  <div>
    <draggable
      ref="pageHtml"
      class="component-viewer-list"
      :class="{ 'has-components-shown': showSnippetBorders }"
      :group="{ name: 'content', put: editable, sort: editable }"
      :list="components"
    >
      <div
        v-for="(component, index) in components"
        :key="index"
        class="component-viewer-item"
      >
        <div v-if="editable" class="component-viewer-item__options">
          <div class="buttons">
            <button
              class="button is-danger"
              @click="deleteComponentItem(component)"
            >
              Delete
            </button>
          </div>
        </div>
        <component
          :is="component.component"
          ref="myTextEditorHtml"
          :color="component.color"
          :container="component.container"
          :content="component.content"
          :editable="editable"
        />
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable';
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import { components } from '~/html-snippets';
import PageBuilderStore from '~/store/pageBuilder';
import { Snippet } from '~/types/Snippet';

@Component({
  components: {
    ...components,
    draggable
  }
})
export default class ComponentViewer extends Vue {
  $refs!: {
    myTextEditorHtml: Vue[];
  };

  get components(): Snippet[] {
    return PageBuilderStore.components;
  }

  get showSnippetBorders(): boolean {
    return PageBuilderStore.showSnippetBorders;
  }

  get editable(): boolean {
    return PageBuilderStore.editable;
  }

  get copyingCode(): boolean {
    return PageBuilderStore.copyingCode;
  }

  deleteComponentItem(component: Snippet): void {
    PageBuilderStore.removeComponent(component);
  }

  @Watch('copyingCode', { deep: true })
  async updateCode(): Promise<void> {
    if (PageBuilderStore.copyingCode) {
      const currentEditState = PageBuilderStore.editable;

      await PageBuilderStore.toggleEditable(false);
      await this.$nextTick();

      // Get and copy html content
      const htmlContent = this.$refs.myTextEditorHtml.reduce(
        (accumulator: string, currentValue: Vue) => {
          return accumulator + currentValue.$el.outerHTML;
        },
        ''
      );
      await PageBuilderStore.copyCode(htmlContent);

      await this.$nextTick();
      await PageBuilderStore.toggleEditable(currentEditState);
    }
  }
}
</script>
