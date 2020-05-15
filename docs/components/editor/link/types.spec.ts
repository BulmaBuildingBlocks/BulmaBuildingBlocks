import {
  EditableLink,
  EditableLinkProps,
  LinkType
} from '~/components/editor/link/types';
import { Status } from '~/shared/config';

const createEditableLink = (propsData: EditableLinkProps) => {
  return new EditableLink(propsData);
};

describe('Check EditableLink class provides correct object properties', () => {
  it('Check constructor works correctly', () => {
    const test = createEditableLink({
      label: 'About',
      href: '#',
      linkType: LinkType.Button
    });

    expect(test).toMatchObject({
      label: 'About',
      href: '#',
      status: Status.None
    });

    const test1 = createEditableLink({
      label: 'Sign up',
      href: '#',
      status: Status.Primary,
      linkType: LinkType.Button,
      popupPlacement: 'top-end'
    });

    expect(test1).toMatchObject({
      label: 'Sign up',
      href: '#',
      status: Status.Primary,
      linkType: LinkType.Button,
      popupPlacement: 'top-end'
    });

    const test2 = createEditableLink({
      label: 'Sign up',
      href: 'http://www.test.com',
      linkType: LinkType.Button,
      popupPlacement: 'top-end'
    });

    expect(test2).toMatchObject({
      label: 'Sign up',
      href: 'http://www.test.com',
      status: Status.None,
      popupPlacement: 'top-end'
    });
  });
});
