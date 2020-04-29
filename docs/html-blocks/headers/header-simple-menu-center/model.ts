import { EditableImageProps } from '~/components/editor/image/types';
import { EditableLink, LinkType } from '~/components/editor/link/types';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-type.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start',
    width: 115,
    height: 30
  };

  navLeft: EditableLink[] = [
    new EditableLink({
      label: 'Home',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-start'
    }),
    new EditableLink({
      label: 'About',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-start'
    })
  ];

  navRight: EditableLink[] = [
    new EditableLink({
      label: 'FAQ',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-end'
    }),
    new EditableLink({
      label: 'Contact',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-end'
    })
  ];
}

export default Model;
