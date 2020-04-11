import headerSnippets from '~/html-snippets/headers';
import featureSnippets from '~/html-snippets/features';
import contentSnippets from '~/html-snippets/content';
import { Snippet, SnippetListObject } from '~/types/Snippet';

// Manifest all snippets into one array
const allHtmlSnippets: Snippet[] = [
  ...headerSnippets,
  ...featureSnippets,
  ...contentSnippets
];

// Creates Object of Snippets used for importing directly as snippets in vue templates
const snippetsExtract = (): SnippetListObject => {
  const snippets: SnippetListObject = {};
  const allSnippetsArray = allHtmlSnippets.map((x) => x.component);

  for (const snippet of allSnippetsArray) {
    snippets[snippet.name] = snippet;
  }

  return snippets;
};

export const snippets = snippetsExtract();

export default allHtmlSnippets;
