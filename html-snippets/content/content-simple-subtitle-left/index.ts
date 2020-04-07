import ContentSubtitleLeft from './content-simple-subtitle-left.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Subtitle Left',
  component: ContentSubtitleLeft,
  color: 'white',
  content: {
    subtitle: getContent(ContentType.SmallDescription)
  }
};

export default component;
