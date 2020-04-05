import HeaderExSimpleLogoLeft from './header-simple-logo-left.vue';
import { Snippet } from '~/types/Snippet';
import { ContentType, getContent } from '~/shared/content';

const component: Snippet = {
  title: 'Navbar with Logo Left',
  component: HeaderExSimpleLogoLeft,
  color: 'white',
  container: true,
  content: {
    logo: getContent(ContentType.Logo)
  }
};

export default component;
