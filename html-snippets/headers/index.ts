import HeaderExSimpleLogoLeft from '~/html-snippets/headers/header-simple-logo-left.vue';
import HeaderExSimpleLogoMiddle from '~/html-snippets/headers/header-simple-logo-middle.vue';
import HeaderExSimple from '~/html-snippets/headers/header-simple.vue';
import HeaderExMenuCenter from '~/html-snippets/headers/header-simple-menu-center.vue';
import { ContentType, getContent } from '~/shared/content';

const components = [
  {
    title: 'Navbar with Logo Left',
    component: HeaderExSimpleLogoLeft,
    color: 'white',
    container: true,
    content: {
      logo: getContent(ContentType.Logo)
    }
  },
  {
    title: 'Navbar with Logo Center',
    component: HeaderExSimpleLogoMiddle,
    color: 'white',
    content: {
      logo: getContent(ContentType.BasicLogo)
    }
  },
  {
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
            class: 'navbar-item'
          })
        },
        {
          type: ContentType.LinkButton,
          content: getContent(ContentType.LinkButton, {
            text: 'Documentation',
            class: 'navbar-item'
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
  },
  {
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
            text: 'Menu',
            class: 'navbar-item'
          })
        }
      ],
      navRight: [
        {
          type: ContentType.LinkButton,
          content: getContent(ContentType.LinkButton, {
            text: 'Reservations',
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
  }
];

export default components;
