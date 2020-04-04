import headerComponents from '~/html-snippets/headers';
import featureComponents from '~/html-snippets/features';
import contentComponents from '~/html-snippets/content';
import { Snippet, SnippetListObject } from '~/types/Snippet';

// Manifest all components into one array
const allHtmlSnippets: Snippet[] = [...headerComponents, ...featureComponents, ...contentComponents];

// Creates Object of Components used for importing directly as components in vue templates
const componentsExtract = (): SnippetListObject => {
  const snippets: SnippetListObject = {};
  const allSnippetsArray = allHtmlSnippets.map((x) => x.component);

  for (const snippet of allSnippetsArray) {
    snippets[snippet.name] = snippet;
  }

  return snippets;
};

export const components = componentsExtract();

export default allHtmlSnippets;
