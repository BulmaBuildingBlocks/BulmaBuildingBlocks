import { EditableImageProps } from '~/components/editor/image/types';

interface Column {
  image: EditableImageProps;
  title: string;
}

class Model {
  title = 'Bulma Building Blocks';

  items: Column[] = [
    {
      image: {
        src: require(`~/assets/images/Background 1.jpg`),
        alt: 'Image One'
      },
      title: 'Feature 1'
    },
    {
      image: {
        src: require(`~/assets/images/Background 2.jpg`),
        alt: 'Image Two'
      },
      title: 'Feature 2'
    },
    {
      image: {
        src: require(`~/assets/images/Background 3.jpg`),
        alt: 'Image Three'
      },
      title: 'Feature 3'
    }
  ];
}

export default Model;
