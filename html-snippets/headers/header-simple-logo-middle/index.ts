import HeaderExSimpleLogoMiddle from './header-simple-logo-middle.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Navbar with Logo Center',
  component: HeaderExSimpleLogoMiddle,
  color: 'white',
  content: {
    logo: getContent(ContentType.BasicLogo)
  }
};

export default component;
