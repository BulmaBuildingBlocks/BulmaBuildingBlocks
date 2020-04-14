<template>
  <div id="page-content" class="section">
    <div v-for="(blocks, index) in allblocks" :key="index">
      <Example v-for="block in blocks" :key="block.name" :block="block" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import allblocks from '~/html-blocks';

@Component
export default class Index extends Vue {
  allblocks = allblocks;
}
</script>
