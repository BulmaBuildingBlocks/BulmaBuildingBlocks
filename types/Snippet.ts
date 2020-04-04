import { VueConstructor } from 'vue';

export interface Snippet {
  title: string;
  component: VueConstructor;
  color?: string;
  container?: boolean;
  editable?: boolean;
  staticHtml?: string;
}

export interface SnippetListObject {
  [p: string]: VueConstructor;
}
