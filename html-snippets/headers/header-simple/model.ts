import { EditableImageProps } from '~/components/wiziwig/image/types';
import { EditableLinkProps } from '~/components/wiziwig/link/types';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-logo.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start'
  };

  navLinks: EditableLinkProps[] = [
    {
      label: 'Home',
      href: '#',
      popupPlacement: 'top-start'
    },
    {
      label: 'Documentation',
      href: '#',
      popupPlacement: 'top-start'
    }
  ];

  navButtons: EditableLinkProps[] = [
    {
      label: 'Sign up',
      href: '#',
      styles: 'button is-primary',
      popupPlacement: 'top-end'
    },
    {
      label: 'Log in',
      href: '#',
      styles: 'button is-light',
      popupPlacement: 'top-end'
    }
  ];
}

export default Model;
