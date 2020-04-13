<template>
  <div id="page-headers" class="section">
    <Example v-for="block in blocks" :key="block.name" :block="block" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import blocks from '~/html-blocks/headers';

@Component
export default class Index extends Vue {
  blocks = blocks;
}
</script>
