import { EditableImageProps } from '~/components/editor/image/types';
import { EditableLink, LinkType } from '~/components/editor/link/types';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-logo.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start',
    width: 140
  };

  navLinks: EditableLink[] = [
    new EditableLink({
      label: 'Home',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-start'
    }),
    new EditableLink({
      label: 'Products',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-start'
    }),
    new EditableLink({
      label: 'Info',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-start'
    })
  ];

  copyright = '©2020 Bulma Building Blocks';
}

export default Model;
