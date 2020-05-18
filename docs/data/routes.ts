interface Route {
  title: string;
  subtitle: string;
  path: string;
}

const routes = new Map([
  [
    '/',
    {
      title: 'Bulma Building Blocks: lightweight UI components for Bulma',
      subtitle:
        'Bulma Building Blocks is a lightweight library of responsive UI components based on Bulma framework.',
      path: '/'
    }
  ],
  [
    'notfound',
    {
      title: 'Page not found',
      subtitle: 'Sorry, we couldn’t find the page you were looking for',
      path: '/notfound'
    }
  ],
  [
    'html-blocks/headers',
    {
      title: 'Headers',
      subtitle: 'Selection of all Header',
      path: '/html-blocks/headers'
    }
  ],
  [
    'html-blocks/contents',
    {
      title: 'Contents',
      subtitle: 'Selection of all Content Blocks',
      path: '/html-blocks/contents'
    }
  ],
  [
    'html-blocks/features',
    {
      title: 'Features',
      subtitle: 'Selection of all Feature Blocks',
      path: '/html-blocks/features'
    }
  ],
  [
    'html-blocks/footers',
    {
      title: 'Footers',
      subtitle: 'Selection of all Footer Blocks',
      path: '/html-blocks/footers'
    }
  ]
]);

export default routes;
