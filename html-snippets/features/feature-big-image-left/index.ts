import FeatureBigImageRight from './feature-big-image-left.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Big Image Right',
  component: FeatureBigImageRight,
  color: 'white',
  content: {
    title: getContent(ContentType.Title),
    paragraphs: getContent(ContentType.Paragraphs),
    image: getContent(ContentType.Images, 8)
  }
};

export default component;
