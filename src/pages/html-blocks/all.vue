<template>
  <div id="page-content" class="section">
    <Example
      v-for="snippet in snippets"
      :key="snippet.name"
      :snippet="snippet"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import snippets from '~/html-snippets';

@Component
export default class Index extends Vue {
  snippets = snippets;
}
</script>
