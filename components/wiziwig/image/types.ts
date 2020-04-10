export interface EditableImageProps {
  /**
   * Key of a permalink referencing the source of the picture.
   */
  src: string;

  /**
   * Caption on the picture, used also as alternative text.
   */
  alt: string;

  /**
   * Hyperlink attached to the picture.
   */
  href?: string;

  /**
   * Picture width.
   */
  width?: number;

  /**
   * Picture height.
   */
  height?: number;

  /**
   * Popup Placement.
   */
  popupPlacement?: string;
}
