import FeatureBigImageLeft from './feature-big-image-right.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Big Image Left',
  component: FeatureBigImageLeft,
  color: 'white',
  content: {
    title: getContent(ContentType.Title),
    paragraphs: getContent(ContentType.Paragraphs),
    image: getContent(ContentType.Images, 2)
  }
};

export default component;
