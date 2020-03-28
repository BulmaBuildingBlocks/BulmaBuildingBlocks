export interface ISnippetConstructorProps {
  staticHtml?: string;
  title: string;
  component: any;
  color?: string;
  container?: boolean;
}

export interface ISnippet {
  title: string;
  component: any;
  color?: string;
  container?: boolean;
  staticHtml: string;
}
