import { EditableLinkProps } from '~/components/wiziwig/link/types';

class Model {
  navLinks: EditableLinkProps[] = [
    {
      label: 'Home',
      href: '#',
      popupPlacement: 'top-start'
    },
    {
      label: 'Products',
      href: '#',
      popupPlacement: 'top-start'
    },
    {
      label: 'Info',
      href: '#',
      popupPlacement: 'top-start'
    },
    {
      label: 'Terms',
      href: '#',
      popupPlacement: 'top-start'
    },
    {
      label: 'Contact',
      href: '#',
      popupPlacement: 'top-start'
    }
  ];

  copyright = '©2020 Bulma Building Blocks';
}

export default Model;
