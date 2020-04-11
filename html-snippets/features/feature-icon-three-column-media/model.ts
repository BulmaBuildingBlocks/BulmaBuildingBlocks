import { EditableImageProps } from '~/components/wiziwig/image/types';

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
        alt: 'Icon one'
      },
      title: 'Feature 1',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      image: {
        src: require(`~/assets/icons/2.svg`),
        alt: 'Icon two'
      },
      title: 'Feature 2',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      image: {
        src: require(`~/assets/icons/3.svg`),
        alt: 'Icon three'
      },
      title: 'Feature 3',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    }
  ];
}

export default Model;
