import { EditableLink, LinkType } from '~/components/editor/link/types';
import { EditableImageProps } from '~/components/editor/image/types';
import { Status } from '~/shared/config';

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
      status: Status.White
    }),
    new EditableLink({
      label: 'Shop',
      href: '#',
      linkType: LinkType.Button,
      status: Status.Primary
    })
  ];
}

export default Model;
