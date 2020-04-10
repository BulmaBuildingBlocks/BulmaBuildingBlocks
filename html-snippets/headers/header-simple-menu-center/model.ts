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

  navLeft = [
    {
      type: 'LinkButton',
      content: `<a class="{class}" href="">Home</a>`
    },
    {
      type: 'LinkButton',
      content: `<a class="{class}" href="">About</a>`
    }
  ];

  navRight = [
    {
      type: 'LinkButton',
      content: `<a class="{class}" href="">FAQ</a>`
    },
    {
      type: 'LinkButton',
      content: `<a class="{class}" href="">Contact</a>`
    }
  ];
}

export default Model;
