<template>
  <div id="page-content" class="section">
    <Example
      v-for="component in components"
      :key="component.name"
      :title="component.title"
      :component="component.component"
      :color="component.color"
      :container-toggle="component.containerToggle"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

import components from '~/html-snippets/content';

@Component
export default class Index extends Vue {
  components = components;
}
</script>
