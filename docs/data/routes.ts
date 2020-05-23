interface Route {
  title: string;
  description: string;
  path: string;
}

const routes: Map<string, Route> = new Map([
  [
    '/',
    {
      title: 'Home',
      description:
        'Bulma Building Blocks is a lightweight library of responsive HTML components based on the Bulma framework.',
      path: '/'
    }
  ],
  [
    '/notfound',
    {
      title: 'Page not found',
      description: 'Sorry, we couldn’t find the page you were looking for',
      path: '/notfound'
    }
  ],
  [
    '/documentation',
    {
      title: 'Documentation',
      description:
        'Get started the Bulma Building Blocks tools to create your next stylish website.',
      path: '/html-blocks/all'
    }
  ],
  [
    '/page-builder',
    {
      title: 'Page Builder',
      description:
        "Use the page builder to create, edit and use the html snippets we provide, they're free and ready to be used in your next project.",
      path: '/html-blocks/all'
    }
  ],
  [
    '/html-blocks/all',
    {
      title: 'All',
      description: 'All the block',
      path: '/html-blocks/all'
    }
  ],
  [
    '/html-blocks/headers',
    {
      title: 'Headers',
      description: 'Selection of all Header',
      path: '/html-blocks/headers'
    }
  ],
  [
    '/html-blocks/contents',
    {
      title: 'Contents',
      description: 'Selection of all Content Blocks',
      path: '/html-blocks/contents'
    }
  ],
  [
    '/html-blocks/calltoactions',
    {
      title: 'Call to Actions',
      description: 'Selection of Call to Action Blocks',
      path: '/html-blocks/calltoactions'
    }
  ],
  [
    '/html-blocks/features',
    {
      title: 'Features',
      description: 'Selection of all Feature Blocks',
      path: '/html-blocks/features'
    }
  ],
  [
    '/html-blocks/footers',
    {
      title: 'Footers',
      description: 'Selection of all Footer Blocks',
      path: '/html-blocks/footers'
    }
  ]
]);

export default routes;
