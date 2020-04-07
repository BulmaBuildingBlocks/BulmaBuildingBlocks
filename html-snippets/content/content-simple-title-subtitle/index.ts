import ContentTitleSubtitle from './content-simple-title-subtitle.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Title and Subtitle',
  component: ContentTitleSubtitle,
  color: 'white',
  content: {
    title: getContent(ContentType.Title),
    subtitle: getContent(ContentType.SmallDescription)
  }
};

export default component;
