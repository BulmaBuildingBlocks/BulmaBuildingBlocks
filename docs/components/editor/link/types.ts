import { Status } from '~/shared/config';

export enum LinkType {
  Button = 'button',
  Link = 'Link',
  NavLink = 'navbar-item'
}

export const ButtonTypeClasses = {
  Normal: '',
  Outlined: 'is-outlined'
};

export class EditableLink implements EditableLinkItem {
  constructor(props: EditableLinkProps) {
    this.label = props.label;
    this.status = props.status || Status.None;
    this.linkType = props.linkType;
    this.href = props.href;
    this.popupPlacement = props.popupPlacement;
  }

  href?: string;
  label: string;
  popupPlacement?: string;
  status: Status;
  linkType: LinkType;
}

export interface EditableLinkItem {
  /*
   * Label on the button.
   */
  label: string;

  /**
   * Assigned hyperlink.
   */
  href?: string;

  /**
   * Link styles.
   */
  linkType: LinkType;

  /**
   * Link styles.
   */
  status: Status;

  /**
   * Popup Placement.
   */
  popupPlacement?: string;
}

export interface EditableLinkProps {
  /**
   * Label on the button.
   */
  label: string;

  /**
   * Assigned hyperlink.
   */
  href?: string;

  /**
   * Link styles.
   */
  linkType: LinkType;

  /**
   * Link styles.
   */
  status?: Status;

  /**
   * Popup Placement.
   */
  popupPlacement?: string;
}