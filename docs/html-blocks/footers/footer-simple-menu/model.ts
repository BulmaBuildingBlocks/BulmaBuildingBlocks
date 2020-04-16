import { EditableImageProps } from '~/components/wiziwig/image/types';
import { EditableLinkProps } from '~/components/wiziwig/link/types';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-logo.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start',
    width: 140
  };

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
    }
  ];

  copyright = '©2020 Copyright Bulma Building Blocks';
}

export default Model;
