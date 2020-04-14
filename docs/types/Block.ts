import { VueConstructor } from 'vue';

export interface Block {
  title: string;
  component: VueConstructor;
  content?: any;
  color?: string;
  container?: boolean;
}

export interface BlockListObject {
  [x: string]: VueConstructor;
}
