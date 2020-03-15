<template>
  <div id="page-headers" class="section">
    <div class="container">
      <Example title="Title" :component="SimpleTitle" color="white" />
      <Example title="Subtitle" :component="SimpleSubtitle" color="white" />
      <Example title="Title and Subtitle" :component="SimpleTitleSubtitle" color="white" />
      <Example title="Subtitle Left" :component="SimpleSubtitleLeft" color="white" />
      <Example title="Subtitle Right" :component="SimpleSubtitleRight" color="white" />
      <Example title="Title with Content" :component="SimpleTitleSubtitleFull" color="white" />
      <Example title="Title Two Columns" :component="SimpleTitleTwoColumn" color="white" />
      <Example title="Single Image" :component="SingleImage" color="white" />
    </div>
  </div>
</template>

<script lang="ts">
import SimpleTitle from '~/html-snippets/content/content-simple-title.vue';
import SimpleSubtitle from '~/html-snippets/content/content-simple-subtitle.vue';
import SimpleTitleSubtitle from '~/html-snippets/content/content-simple-title-subtitle.vue';
import SimpleSubtitleLeft from '~/html-snippets/content/content-simple-subtitle-left.vue';
import SimpleSubtitleRight from '~/html-snippets/content/content-simple-subtitle-right.vue';
import SimpleTitleSubtitleFull from '~/html-snippets/content/content-simple-title-with-content.vue';
import SimpleTitleTwoColumn from '~/html-snippets/content/content-simple-title-two-column.vue';
import SingleImage from '~/html-snippets/content/content-simple-single-image.vue';

import { Vue, Component } from '~/node_modules/nuxt-property-decorator';

@Component
export default class Index extends Vue {
  SimpleTitle = SimpleTitle;
  SimpleSubtitle = SimpleSubtitle;
  SimpleTitleSubtitle = SimpleTitleSubtitle;
  SimpleSubtitleLeft = SimpleSubtitleLeft;
  SimpleSubtitleRight = SimpleSubtitleRight;
  SimpleTitleSubtitleFull = SimpleTitleSubtitleFull;
  SimpleTitleTwoColumn = SimpleTitleTwoColumn;
  SingleImage = SingleImage;
}
</script>
