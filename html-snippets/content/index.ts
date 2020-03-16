import SimpleTitle from '~/html-snippets/content/content-simple-title.vue';
import SimpleSubtitle from '~/html-snippets/content/content-simple-subtitle.vue';
import SimpleTitleSubtitle from '~/html-snippets/content/content-simple-title-subtitle.vue';
import SimpleSubtitleLeft from '~/html-snippets/content/content-simple-subtitle-left.vue';
import SimpleSubtitleRight from '~/html-snippets/content/content-simple-subtitle-right.vue';
import SimpleTitleSubtitleFull from '~/html-snippets/content/content-simple-title-with-content.vue';
import SimpleTitleTwoColumn from '~/html-snippets/content/content-simple-title-two-column.vue';
import SingleImage from '~/html-snippets/content/content-simple-single-image.vue';

const components = [
  {
    name: 'Title',
    component: SimpleTitle,
    color: 'white'
  },
  {
    name: 'Subtitle',
    component: SimpleSubtitle,
    color: 'white'
  },
  {
    name: 'Title and Subtitle',
    component: SimpleTitleSubtitle,
    color: 'white'
  },
  {
    name: 'Subtitle Left',
    component: SimpleSubtitleLeft,
    color: 'white'
  },
  {
    name: 'Subtitle Right',
    component: SimpleSubtitleRight,
    color: 'white'
  },
  {
    name: 'Title with Content',
    component: SimpleTitleSubtitleFull,
    color: 'white'
  },
  {
    name: 'Title Two Columns',
    component: SimpleTitleTwoColumn,
    color: 'white'
  },
  {
    name: 'Single Image',
    component: SingleImage,
    color: 'white'
  }
];

export default components;
