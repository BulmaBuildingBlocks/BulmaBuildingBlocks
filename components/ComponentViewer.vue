<template>
  <div>
    <draggable
      ref="pageHtml"
      class="component-viewer-list"
      :class="{ 'has-components-shown': showComponents }"
      :group="{ name: 'content' }"
      :list="components"
    >
      <component
        :is="component.component"
        v-for="component in components"
        :key="component.name"
        :color="component.color"
        :container="component.container"
      />
    </draggable>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import draggable from 'vuedraggable';
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator';
import prettier from 'prettier/standalone';
import { components } from '~/html-snippets';
import { prettierConf } from '~/shared/config';
import PageBuilderStore from '~/store/pageBuilder';

@Component({
  components: {
    ...components,
    draggable
  }
})
export default class ComponentViewer extends Vue {
  @Prop(Array) components!: [];

  get showComponents() {
    return PageBuilderStore.showComponents;
  }

  $refs!: any;

  @Watch('components')
  updateCode() {
    this.$nextTick(() => {
      PageBuilderStore.updateCode(prettier.format(this.$refs.pageHtml.$el.innerHTML, prettierConf));
    });
  }
}
</script>
