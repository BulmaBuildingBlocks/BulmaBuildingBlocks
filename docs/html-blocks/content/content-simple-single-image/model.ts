import { EditableLink, LinkType } from '~/components/editor/link/types';
import { EditableImageProps } from '~/components/editor/image/types';

class Model {
  title = 'Bulma Building Blocks';

  subtitle = 'Helping to create beautiful websites';

  image: EditableImageProps = {
    src: require(`~/assets/images/Scene Living Room.svg`),
    alt: ''
  };

  navButtons: EditableLink[] = [
    new EditableLink({
      label: 'About',
      href: '#',
      linkType: LinkType.Button,
      styles: 'white'
    }),
    new EditableLink({
      label: 'Shop',
      href: '#',
      linkType: LinkType.Button,
      styles: 'primary'
    })
  ];
}

export default Model;
