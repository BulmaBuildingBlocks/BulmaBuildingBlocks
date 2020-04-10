import { EditableImageProps } from '~/components/wiziwig/image/types';

class Model {
  logo: EditableImageProps = {
    src: `https://bulma.io/images/bulma-type.png`,
    alt: 'Bulma Logo',
    href: '',
    popupPlacement: 'top-start',
    width: 115,
    height: 30
  };
}

export default Model;
