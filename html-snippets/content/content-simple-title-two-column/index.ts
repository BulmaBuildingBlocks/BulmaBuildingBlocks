import ContentTitleTwoColumn from './content-simple-title-two-column.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Title Two Columns',
  component: ContentTitleTwoColumn,
  color: 'white',
  content: {
    title: getContent(ContentType.Title),
    paragraphs: [getContent(ContentType.Paragraph), getContent(ContentType.Paragraph)]
  }
};

export default component;
