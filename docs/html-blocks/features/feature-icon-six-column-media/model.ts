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
    },
    {
      image: {
        src: require(`~/assets/icons/4.svg`),
        alt: 'Icon four'
      },
      title: 'Feature 4',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      image: {
        src: require(`~/assets/icons/5.svg`),
        alt: 'Icon five'
      },
      title: 'Feature 5',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      image: {
        src: require(`~/assets/icons/6.svg`),
        alt: 'Icon six'
      },
      title: 'Feature 6',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    }
  ];
}

export default Model;
