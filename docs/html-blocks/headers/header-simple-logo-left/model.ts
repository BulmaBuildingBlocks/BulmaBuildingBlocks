import { EditableImageProps } from '~/components/editor/image/types';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-logo.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start'
  };
}

export default Model;
