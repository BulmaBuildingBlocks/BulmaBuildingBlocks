import FeatureImagesThreeColumns from './feature-image-three-column.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Three Images Feature',
  component: FeatureImagesThreeColumns,
  color: 'white',
  content: {
    title: getContent(ContentType.Title),
    items: [
      {
        image: getContent(ContentType.Backgrounds, 1),
        title: getContent(ContentType.FeatureTitle, 1),
        content: getContent(ContentType.SmallDescription)
      },
      {
        image: getContent(ContentType.Backgrounds, 2),
        title: getContent(ContentType.FeatureTitle, 2),
        content: getContent(ContentType.SmallDescription)
      },
      {
        image: getContent(ContentType.Backgrounds, 3),
        title: getContent(ContentType.FeatureTitle, 3),
        content: getContent(ContentType.SmallDescription)
      }
    ]
  }
};

export default component;
