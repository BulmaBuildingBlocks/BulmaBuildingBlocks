import HeaderExSimpleLogoLeft from '~/html-snippets/headers/header-simple-logo-left.vue';
import HeaderExSimpleLogoMiddle from '~/html-snippets/headers/header-simple-logo-middle.vue';
import HeaderExSimple from '~/html-snippets/headers/header-simple.vue';
import HeaderExSimpleTransparent from '~/html-snippets/headers/header-simple-transparent.vue';
import HeaderExMenuCenter from '~/html-snippets/headers/header-simple-menu-center.vue';

const components = [
  {
    title: 'Navbar with Logo Left',
    component: HeaderExSimpleLogoLeft,
    color: 'white',
    container: true
  },
  {
    title: 'Navbar with Logo Center',
    component: HeaderExSimpleLogoMiddle,
    color: 'white'
  },
  {
    title: 'Navbar with Simple Nav',
    component: HeaderExSimple,
    color: 'white',
    container: true
  },
  {
    title: 'Navbar without hover',
    component: HeaderExSimpleTransparent,
    color: 'white',
    container: true
  },
  {
    title: 'Navbar Centered',
    component: HeaderExMenuCenter,
    color: 'white',
    container: true
  }
];

export default components;
