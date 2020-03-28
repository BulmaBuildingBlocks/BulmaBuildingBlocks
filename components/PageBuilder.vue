<template>
  <div>
    <draggable
      ref="pageHtml"
      class="component-viewer-list"
      :class="{ 'has-components-shown': showComponents }"
      :group="{ name: 'content' }"
      :list="components"
    >
      <div v-for="component in components" :key="component.name" class="component-viewer-item">
        <div class="component-viewer-item__options">
          <div class="buttons">
            <button class="button is-danger" @click="deleteComponentItem(component)">Delete</button>
          </div>
        </div>
        <component
          :is="component.component"
          ref="myTextEditorHtml"
          :color="component.color"
          :container="component.container"
        />
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable';
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator';
import prettier from 'prettier/standalone';
import { components } from '~/html-snippets';
import { prettierConf } from '~/shared/config';
import PageBuilderStore from '~/store/pageBuilder';
import { ISnippet } from '~/types/ISnippet';

@Component({
  components: {
    ...components,
    draggable
  }
})
export default class ComponentViewer extends Vue {
  @Prop(Array) components!: ISnippet[];

  get showComponents() {
    return PageBuilderStore.showComponents;
  }

  get editor() {
    return this.$refs.QuillEditor.quill;
  }

  $refs!: any;

  deleteComponentItem(component: ISnippet) {
    PageBuilderStore.removeComponent(component);
  }

  @Watch('components')
  updateCode() {
    this.$nextTick(() => {
      const htmlContent = this.$refs.myTextEditorHtml.reduce((accumulator: string, currentValue: Vue) => {
        return accumulator + currentValue.$el.outerHTML;
      }, '');

      PageBuilderStore.updateCode(prettier.format(htmlContent, prettierConf));
    });
  }
}
</script>
