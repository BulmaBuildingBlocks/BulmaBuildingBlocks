import { EditableLink, LinkType } from '~/components/editor/link/types';

class Model {
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
    }),
    new EditableLink({
      label: 'Terms',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-start'
    }),
    new EditableLink({
      label: 'Contact',
      href: '#',
      linkType: LinkType.NavLink,
      popupPlacement: 'top-start'
    })
  ];

  copyright = '©2020 Bulma Building Blocks';
}

export default Model;
