<template>
  <div id="page-headers" class="section">
    <div class="container">
      <h1 class="title is-4">{{ pageTitle }}</h1>
    </div>
    <Example v-for="block in filterBlocks" :key="block.name" :block="block" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import Blocks from '~/html-blocks';
import routes from '~/data/routes';

@Component
export default class Index extends Vue {
  blocks = Blocks;
  routes = routes;

  get filterBlocks() {
    return this.blocks[this.$route.params.id];
  }

  get pageTitle() {
    return this.routes.get('html-blocks/' + this.$route.params.id).title;
  }
}
</script>
