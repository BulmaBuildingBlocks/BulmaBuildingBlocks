import ContentTitleWithContent from './content-simple-title-with-content.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Title with Content',
  component: ContentTitleWithContent,
  color: 'white',
  content: {
    title: getContent(ContentType.Title),
    paragraphs: getContent(ContentType.Paragraphs)
  }
};

export default component;
