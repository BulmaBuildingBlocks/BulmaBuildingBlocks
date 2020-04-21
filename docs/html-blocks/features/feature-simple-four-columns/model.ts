interface Column {
  title: string;
  content: string;
}

class Model {
  title = 'Bulma Building Blocks';
  items: Column[] = [
    {
      title: 'Feature 1',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      title: 'Feature 2',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      title: 'Feature 3',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    },
    {
      title: 'Feature 4',
      content:
        '<p>Objectively cultivate stand-alone experiences whereas collaborative scenarios.</p>'
    }
  ];
}

export default Model;
