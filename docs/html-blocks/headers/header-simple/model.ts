import { EditableImageProps } from '~/components/editor/image/types';
import { EditableLink, LinkType } from '~/components/editor/link/types';
import { Status } from '~/shared/config';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-logo.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start'
  };

  navLinks: EditableLink[] = [
    new EditableLink({
      label: 'Home',
      href: '#',
      linkType: LinkType.Link,
      popupPlacement: 'top-start'
    }),
    new EditableLink({
      label: 'Documentation',
      href: '#',
      linkType: LinkType.Link,
      popupPlacement: 'top-start'
    })
  ];

  navButtons: EditableLink[] = [
    new EditableLink({
      label: 'Sign up',
      href: '#',
      status: Status.Primary,
      linkType: LinkType.Button,
      popupPlacement: 'top-end'
    }),
    new EditableLink({
      label: 'Log in',
      href: '#',
      status: Status.Light,
      linkType: LinkType.Button,
      popupPlacement: 'top-end'
    })
  ];
}

export default Model;
