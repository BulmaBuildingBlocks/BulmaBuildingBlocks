<template>
  <div>
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
        <component :is="component.component" :color="component.color" :container="component.container" />
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable';
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { components } from '~/html-snippets';
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

  $refs!: any;

  addComponentToPreview(component: ISnippet) {
    PageBuilderStore.addComponent(component);
  }
}
</script>
