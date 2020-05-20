import { EditableLink, LinkType } from '~/components/editor/link/types';
import { Status } from '~/shared/config';

class Model {
  title = 'Bulma Building Blocks';

  buttons: EditableLink[] = [
    new EditableLink({
      label: 'Shop',
      href: '',
      linkType: LinkType.Button,
      status: Status.Primary
    })
  ];
}

export default Model;
