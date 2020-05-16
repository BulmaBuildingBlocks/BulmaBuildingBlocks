export enum EditableContentTypes {
  Text = 'text',
  Title = 'title'
}

export interface EditableContentProps {
  /**
   * Element wrapping the Editable Content.
   */
  tag?: string;

  /**
   * Provides different editing options
   */
  type?: EditableContentTypes;

  /**
   * Class placed on the parent element.
   */
  class?: string;

  /**
   * Value that's edited.
   */
  value: string;

  /**
   * Content Editable.
   */
  editable?: boolean;
}
