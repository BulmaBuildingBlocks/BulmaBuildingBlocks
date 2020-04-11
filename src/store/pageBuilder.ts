import {
  Module,
  Mutation,
  VuexModule,
  getModule,
  Action
} from 'vuex-module-decorators';
import prettier from 'prettier/standalone';
import _ from 'lodash';
import { ToastProgrammatic as Toast } from 'buefy';
import clipboard from 'copy-to-clipboard';
import { store } from '~/store/index';
import { Snippet } from '@/types/Snippet';
import { prettierConf } from '~/shared/config';

@Module({
  name: 'PageBuilderStore',
  dynamic: true,
  store
})
export class PageBuilderStore extends VuexModule {
  code = '';
  snippets: Snippet[] = [];
  showSnippetBorders = true;
  editable = true;
  copyingCode = false;

  @Mutation
  setCode(code: string): void {
    this.code = code;
  }

  @Mutation
  setCopyingCode(copying: boolean): void {
    this.copyingCode = copying;
  }

  @Mutation
  setEditable(editable: boolean): Promise<void> {
    return new Promise((resolve) => {
      this.editable = editable;
      resolve();
    });
  }

  @Mutation
  addSnippet(snippet: Snippet): void {
    this.snippets.push(_.cloneDeep(snippet));
  }

  @Mutation
  removeSnippet(snippet: Snippet): void {
    this.snippets.splice(this.snippets.indexOf(snippet), 1);
  }

  @Mutation
  toggleShowSnippetBorders(show: boolean): void {
    this.showSnippetBorders = show;
  }

  @Mutation
  toggleEditable(editable: boolean): void {
    this.editable = editable;
  }

  @Action
  copyCode(html: string): Promise<void> {
    return new Promise((resolve) => {
      const header = `<!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <title>Bulma Building Block</title>
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
                            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                          </head>
                          <body>
                          `;

      const footer = `</body>
                  </html>`;

      const formattedHtml = prettier.format(
        header + html + footer,
        prettierConf
      );

      this.setCode(formattedHtml);
      clipboard(this.code);
      Toast.open('Copied to clipboard!');
      this.setCopyingCode(false);
      resolve();
    });
  }
}

export default getModule(PageBuilderStore);
