import FeatureSimpleSixColumns from '~/html-snippets/features/feature-simple-six-column.vue';
import FeatureSimpleEightColumns from '~/html-snippets/features/feature-simple-eight-column.vue';
import FeatureIconThreeColumns from '~/html-snippets/features/feature-icon-three-column.vue';
import FeatureImagesThreeColumns from '~/html-snippets/features/feature-image-three-column.vue';
import FeatureIconThreeColumnsMedia from '~/html-snippets/features/feature-icon-three-column-media.vue';
import FeatureBigImageLeft from '~/html-snippets/features/feature-big-image-left.vue';
import FeatureBigImageRight from '~/html-snippets/features/feature-big-image-right.vue';
import { ContentType, getContent } from '~/shared/content';

const components = [
  {
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
  },
  {
    title: 'Eight Column Feature',
    component: FeatureSimpleEightColumns,
    color: 'white',
    container: true,
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
      },
      {
        title: getContent(ContentType.FeatureTitle, 7),
        content: getContent(ContentType.SmallDescription)
      },
      {
        title: getContent(ContentType.FeatureTitle, 8),
        content: getContent(ContentType.SmallDescription)
      }
    ]
  },
  {
    title: 'Three Icons Feature',
    component: FeatureIconThreeColumns,
    color: 'white',
    content: [
      {
        image: getContent(ContentType.Icons, 1),
        title: getContent(ContentType.FeatureTitle, 1),
        content: getContent(ContentType.SmallDescription)
      },
      {
        image: getContent(ContentType.Icons, 2),
        title: getContent(ContentType.FeatureTitle, 2),
        content: getContent(ContentType.SmallDescription)
      },
      {
        image: getContent(ContentType.Icons, 3),
        title: getContent(ContentType.FeatureTitle, 3),
        content: getContent(ContentType.SmallDescription)
      }
    ]
  },
  {
    title: 'Three Images Feature',
    component: FeatureImagesThreeColumns,
    color: 'white'
  },
  {
    title: 'Three Icons Media Feature',
    component: FeatureIconThreeColumnsMedia,
    color: 'white'
  },
  {
    title: 'Big Image Left',
    component: FeatureBigImageLeft,
    color: 'white'
  },
  {
    title: 'Big Image Right',
    component: FeatureBigImageRight,
    color: 'white'
  }
];

export default components;
