import FeatureSimpleSixColumns from './feature-simple-six-column.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Six Column Feature',
  component: FeatureSimpleSixColumns,
  color: 'white',
  content: [
    {
      title: getContent(ContentType.FeatureTitle, 1),
      content: getContent(ContentType.SmallDescription)
    },
    {
      title: getContent(ContentType.FeatureTitle, 2),
      content: getContent(ContentType.SmallDescription)
    },
    {
      title: getContent(ContentType.FeatureTitle, 3),
      content: getContent(ContentType.SmallDescription)
    },
    {
      title: getContent(ContentType.FeatureTitle, 4),
      content: getContent(ContentType.SmallDescription)
    },
    {
      title: getContent(ContentType.FeatureTitle, 5),
      content: getContent(ContentType.SmallDescription)
    },
    {
      title: getContent(ContentType.FeatureTitle, 6),
      content: getContent(ContentType.SmallDescription)
    }
  ]
};

export default component;
