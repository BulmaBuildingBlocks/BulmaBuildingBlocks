import { EditableLink, LinkType } from '~/components/editor/link/types';
import { Status } from '~/shared/config';

class Model {
  title = 'Bulma Building Blocks';

  paragraphs = [
    `<p>
      Appropriately parallel task
      high-quality "outside the box" thinking through bleeding-edge systems. Globally revolutionize
      collaborative bandwidth via B2C intellectual.
    </p>`,
    `<p>
      Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
      administrate highly efficient sources via go forward customer service.
    </p>`
  ];

  buttons: EditableLink[] = [
    new EditableLink({
      label: 'Getting Started',
      href: '',
      linkType: LinkType.Button,
      status: Status.Primary
    }),
    new EditableLink({
      label: 'More Info',
      href: '',
      linkType: LinkType.Button,
      status: Status.Primary
    })
  ];
}

export default Model;
