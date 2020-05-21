<template>
  <div id="page-headers" class="section">
    <Example v-for="block in filterBlocks" :key="block.name" :block="block" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import Blocks from '~/html-blocks';

@Component
export default class Index extends Vue {
  blocks = Blocks;

  get filterBlocks() {
    return this.blocks[this.$route.params.id];
  }
}
</script>
