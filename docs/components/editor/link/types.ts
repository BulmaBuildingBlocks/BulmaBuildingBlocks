import { Status } from '~/shared/config';

export enum LinkType {
  Link = 'Link',
  Button = 'button',
  Rounded = 'button is-rounded',
  Outlined = 'button is-outlined',
  'Rounded Outlined' = 'button is-rounded is-outlined'
}

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
