import { EditableLinkProps } from '~/components/wiziwig/link/types';
import { EditableImageProps } from '~/components/wiziwig/image/types';

class Model {
  title = 'Bulma Building Blocks';

  subtitle = 'Helping to create beautiful websites';

  image: EditableImageProps = {
    src: require(`~/assets/images/Scene Living Room.svg`),
    alt: ''
  };

  navButtons: EditableLinkProps[] = [
    {
      label: 'About',
      href: '#',
      styles: 'button is-white'
    },
    {
      label: 'Shop',
      href: '#',
      styles: 'button is-primary'
    }
  ];
}

export default Model;
