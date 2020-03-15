<template>
  <div id="page-contents" class="section">
    <Example title="Six Column Feature" :component="SimpleSixColumns" color="white" />
    <Example title="Eight Column Feature" :component="SimpleEightColumns" color="white" />
    <Example title="Three Icons Feature" :component="IconThreeColumns" color="white" />
  </div>
</template>

<script lang="ts">
import SimpleSixColumns from '~/html-snippets/features/feature-simple-six-column.vue';
import SimpleEightColumns from '~/html-snippets/features/feature-simple-eight-column.vue';
import IconThreeColumns from '~/html-snippets/features/feature-icon-three-column.vue';

import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

@Component
export default class Index extends Vue {
  SimpleSixColumns = SimpleSixColumns;
  SimpleEightColumns = SimpleEightColumns;
  IconThreeColumns = IconThreeColumns;
}
</script>
