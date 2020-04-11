<template>
  <div id="page-features" class="section">
    <Example
      v-for="snippet in snippets"
      :key="snippet.name"
      :snippet="snippet"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

import snippets from '~/html-snippets/features';

@Component
export default class Index extends Vue {
  snippets = snippets;
}
</script>
