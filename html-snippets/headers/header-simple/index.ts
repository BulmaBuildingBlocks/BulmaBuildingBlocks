import HeaderExSimple from './header-simple.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Navbar with Simple Nav',
  component: HeaderExSimple,
  color: 'white',
  container: true,
  content: {
    logo: getContent(ContentType.Logo),
    navLinks: [
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'Home',
          class: ''
        })
      },
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'Documentation',
          class: ''
        })
      }
    ],
    navButtons: [
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'Sign up',
          class: 'button is-primary'
        })
      },
      {
        type: ContentType.LinkButton,
        content: getContent(ContentType.LinkButton, {
          text: 'Log in',
          class: 'button is-light'
        })
      }
    ]
  }
};

export default component;
