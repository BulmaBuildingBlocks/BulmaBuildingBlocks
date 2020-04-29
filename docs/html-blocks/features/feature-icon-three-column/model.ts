import { EditableImageProps } from '~/components/editor/image/types';

interface Column {
  image: EditableImageProps;
  title: string;
  content: string;
}

class Model {
  title = 'Bulma Building Blocks';

  items: Column[] = [
    {
      image: {
        src: require(`~/assets/icons/1.svg`),
        alt: 'Icon One'
      },
      title: 'Feature 1',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      image: {
        src: require(`~/assets/icons/2.svg`),
        alt: 'Icon Two'
      },
      title: 'Feature 2',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      image: {
        src: require(`~/assets/icons/3.svg`),
        alt: 'Icon Three'
      },
      title: 'Feature 3',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    }
  ];
}

export default Model;
