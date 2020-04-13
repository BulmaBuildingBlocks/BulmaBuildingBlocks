import { EditableImageProps } from '~/components/wiziwig/image/types';
import { EditableLinkProps } from '~/components/wiziwig/link/types';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-type.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start',
    width: 115,
    height: 30
  };

  navLeft: EditableLinkProps[] = [
    {
      label: 'Home',
      href: '#',
      popupPlacement: 'top-start'
    },
    {
      label: 'About',
      href: '#',
      popupPlacement: 'top-start'
    }
  ];

  navRight: EditableLinkProps[] = [
    {
      label: 'FAQ',
      href: '#',
      popupPlacement: 'top-end'
    },
    {
      label: 'Contact',
      href: '#',
      popupPlacement: 'top-end'
    }
  ];
}

export default Model;
