import ContentTitle from './content-simple-title.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Title',
  component: ContentTitle,
  color: 'white',
  content: {
    title: getContent(ContentType.Title)
  }
};

export default component;
