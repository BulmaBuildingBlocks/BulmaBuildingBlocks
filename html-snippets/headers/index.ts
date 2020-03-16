import ExSimpleLogoLeft from '~/html-snippets/headers/header-simple-logo-left.vue';
import ExSimpleLogoMiddle from '~/html-snippets/headers/header-simple-logo-middle.vue';
import ExSimple from '~/html-snippets/headers/header-simple.vue';
import ExSimpleTransparent from '~/html-snippets/headers/header-simple-transparent.vue';
import ExMenuCenter from '~/html-snippets/headers/header-simple-menu-center.vue';

const components = [
  {
    name: 'Navbar with Logo Left',
    component: ExSimpleLogoLeft,
    color: 'white',
    containerToggle: true
  },
  {
    name: 'Navbar with Logo Center',
    component: ExSimpleLogoMiddle,
    color: 'white',
    containerToggle: true
  },
  {
    name: 'Navbar with Simple Nav',
    component: ExSimple,
    color: 'white',
    containerToggle: true
  },
  {
    name: 'Navbar without hover',
    component: ExSimpleTransparent,
    color: 'white',
    containerToggle: true
  },
  {
    name: 'Navbar Centered',
    component: ExMenuCenter,
    color: 'white',
    containerToggle: true
  }
];

export default components;
