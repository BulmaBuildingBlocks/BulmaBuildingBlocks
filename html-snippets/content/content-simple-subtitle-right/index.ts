import ContentSubtitleRight from './content-simple-subtitle-right.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Subtitle Right',
  component: ContentSubtitleRight,
  color: 'white',
  content: {
    subtitle: getContent(ContentType.SmallDescription)
  }
};

export default component;
