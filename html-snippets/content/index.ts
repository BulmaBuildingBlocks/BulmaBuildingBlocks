import ContentSimpleTitle from '~/html-snippets/content/content-simple-title.vue';
import ContentSimpleSubtitle from '~/html-snippets/content/content-simple-subtitle.vue';
import ContentSimpleTitleSubtitle from '~/html-snippets/content/content-simple-title-subtitle.vue';
import ContentSimpleSubtitleLeft from '~/html-snippets/content/content-simple-subtitle-left.vue';
import ContentSimpleSubtitleRight from '~/html-snippets/content/content-simple-subtitle-right.vue';
import ContentSimpleTitleSubtitleFull from '~/html-snippets/content/content-simple-title-with-content.vue';
import ContentSimpleTitleTwoColumn from '~/html-snippets/content/content-simple-title-two-column.vue';
import ContentSingleImage from '~/html-snippets/content/content-simple-single-image.vue';

const components = [
  {
    title: 'Title',
    component: ContentSimpleTitle,
    color: 'white'
  },
  {
    title: 'Subtitle',
    component: ContentSimpleSubtitle,
    color: 'white'
  },
  {
    title: 'Title and Subtitle',
    component: ContentSimpleTitleSubtitle,
    color: 'white'
  },
  {
    title: 'Subtitle Left',
    component: ContentSimpleSubtitleLeft,
    color: 'white'
  },
  {
    title: 'Subtitle Right',
    component: ContentSimpleSubtitleRight,
    color: 'white'
  },
  {
    title: 'Title with Content',
    component: ContentSimpleTitleSubtitleFull,
    color: 'white'
  },
  {
    title: 'Title Two Columns',
    component: ContentSimpleTitleTwoColumn,
    color: 'white'
  },
  {
    title: 'Single Image',
    component: ContentSingleImage,
    color: 'white'
  }
];

export default components;
