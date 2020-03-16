<template>
  <div id="page-contents" class="section">
    <Example title="Six Column Feature" :component="SimpleSixColumns" color="white" />
    <Example title="Eight Column Feature" :component="SimpleEightColumns" color="white" />
    <Example title="Three Icons Feature" :component="IconThreeColumns" color="white" />
    <Example title="Three Images Feature" :component="ImagesThreeColumns" color="white" />
    <Example title="Three Icons Media Feature" :component="IconThreeColumnsMedia" color="white" />
    <Example title="Big Image Left" :component="BigImageLeft" color="white" />
    <Example title="Big Image Right" :component="BigImageRight" color="white" />
  </div>
</template>

<script lang="ts">
import SimpleSixColumns from '~/html-snippets/features/feature-simple-six-column.vue';
import SimpleEightColumns from '~/html-snippets/features/feature-simple-eight-column.vue';
import IconThreeColumns from '~/html-snippets/features/feature-icon-three-column.vue';
import ImagesThreeColumns from '~/html-snippets/features/feature-image-three-column.vue';
import IconThreeColumnsMedia from '~/html-snippets/features/feature-icon-three-column-media.vue';
import BigImageLeft from '~/html-snippets/features/feature-big-image-left.vue';
import BigImageRight from '~/html-snippets/features/feature-big-image-right.vue';

import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

@Component
export default class Index extends Vue {
  SimpleSixColumns = SimpleSixColumns;
  SimpleEightColumns = SimpleEightColumns;
  IconThreeColumns = IconThreeColumns;
  IconThreeColumnsMedia = IconThreeColumnsMedia;
  BigImageLeft = BigImageLeft;
  BigImageRight = BigImageRight;
  ImagesThreeColumns = ImagesThreeColumns;
}
</script>
