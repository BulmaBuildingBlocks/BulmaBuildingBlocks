import { VueConstructor } from 'vue';

export interface Snippet {
  title: string;
  component: VueConstructor;
  content?: any;
  color?: string;
  container?: boolean;
  editable?: boolean;
}

export interface SnippetListObject {
  [p: string]: VueConstructor;
}
