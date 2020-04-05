import HeaderExMenuCenter from './header-simple-menu-center.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Navbar Centered',
  component: HeaderExMenuCenter,
  color: 'white',
  container: true,
  content: {
    logo: getContent(ContentType.BasicLogo),
    navLeft: [
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'Home',
          class: 'navbar-item'
        })
      },
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'About',
          class: 'navbar-item'
        })
      }
    ],
    navRight: [
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'FAQ',
          class: 'navbar-item'
        })
      },
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'Contact',
          class: 'navbar-item'
        })
      }
    ]
  }
};

export default component;
