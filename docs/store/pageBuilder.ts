import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';
import prettier from 'prettier/standalone';
import _ from 'lodash';
import { ToastProgrammatic as Toast } from 'buefy';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { store } from '~/store/index';
import { Block } from '~/types/Block';
import { prettierConf } from '~/shared/config';
// eslint-disable-next-line import/no-webpack-loader-syntax
import BulmaBuildingBlockCss from '!!raw-loader!~/static/bulmabuildingblocks.min.css';

@Module({
  name: 'PageBuilderStore',
  dynamic: true,
  store
})
export class PageBuilderStore extends VuexModule {
  code = '';
  blocks: Block[] = [];
  editable = true;
  downloadingCode = false;

  @Mutation
  async setCode(code: string): Promise<void> {
    const header = `<!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <title>Bulma Building Block</title>
                            <link rel="stylesheet" type="text/css" href="./bulmabuildingblocks.min.css">
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
                            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                          </head>
                          <body>
                          `;

    const footer = `</body>
                  </html>`;

    this.code = await prettier.format(header + code + footer, prettierConf);
  }

  @Mutation
  setDownloadingCode(copying = true): void {
    this.downloadingCode = copying;
  }

  @Mutation
  setEditable(editable: boolean): Promise<void> {
    return new Promise((resolve) => {
      this.editable = editable;
      resolve();
    });
  }

  @Mutation
  addBlock(block: Block): void {
    this.blocks.push(_.cloneDeep(block));
  }

  @Mutation
  removeBlock(block: Block): void {
    this.blocks.splice(this.blocks.indexOf(block), 1);
  }

  @Mutation
  toggleEditable(editable: boolean): void {
    this.editable = editable;
  }

  @Action
  downloadCode(): Promise<void> {
    return new Promise((resolve) => {
      const zip = new JSZip();
      zip.file('index.html', this.code);
      zip.file('bulmabuildingblocks.min.css', BulmaBuildingBlockCss);

      zip.generateAsync({ type: 'blob' }).then((content: any) => {
        // see FileSaver.js
        saveAs(content, 'BulmaBuildingBlocks.zip');

        Toast.open('Download Started');
        resolve();
      });
    });
  }
}

export default getModule(PageBuilderStore);
