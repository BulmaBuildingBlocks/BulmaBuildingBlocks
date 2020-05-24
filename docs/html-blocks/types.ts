import { VueConstructor } from 'vue';

export enum ContentTypes {
  Headers = 'headers',
  Features = 'features',
  CallToActions = 'calltoactions',
  Contents = 'contents',
  Footers = 'footers'
}

export interface Block {
  title: string;
  type?: ContentTypes;
  componentName: string;
  component: VueConstructor;
  content?: any;
  color?: string;
  container?: boolean;
}

export interface BlockListObject {
  [x: string]: VueConstructor;
}
