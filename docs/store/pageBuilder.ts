import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';
import prettier from 'prettier/standalone';
import { replace, cloneDeep } from 'lodash';
import { ToastProgrammatic as Toast } from 'buefy';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';
import clipboard from 'copy-to-clipboard';
import { store } from './index';
import { prettierConf } from '~/shared/config';
import { getRegexMatches } from '~/shared/utils';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import BulmaBuildingBlockCss from '!!raw-loader!~/static/bulmabuildingblocks.min.css';
import { Block } from '~/html-blocks/types';

interface ExportCodeProps {
  copying: boolean;
  download?: boolean;
}

@Module({
  name: 'PageBuilderStore',
  dynamic: true,
  store
})
export class PageBuilderStore extends VuexModule {
  blocks: Block[] = [];
  code = '';
  editable = true;
  download = false;
  exportCode = false;

  @Mutation
  async setCode(code: string): Promise<void> {
    this.code = await prettier.format(code, prettierConf);
  }

  @Mutation
  setExportCode({ copying = true, download }: ExportCodeProps): void {
    /***
     * Look at PageBuilder.vue in that folder there's a watcher that checks for when
     * exportCode changes. It performs the copying of the code as it needs access to
     * the current $refs
     */

    if (download) {
      this.download = download;
    }

    this.exportCode = copying;
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
    this.blocks.push(cloneDeep(block));
  }

  @Mutation
  removeBlock(block: Block): void {
    this.blocks.splice(this.blocks.indexOf(block), 1);
  }

  @Mutation
  moveBlock({ block, direction }: { block: Block; direction: number }): void {
    const index = this.blocks.indexOf(block);
    const newIndex = index + direction;

    if (newIndex > -1 && newIndex < this.blocks.length) {
      // Remove the element from the array
      const removedElement = this.blocks.splice(index, 1)[0];

      // At "newIndex", remove 0 elements, insert the removed element
      this.blocks.splice(newIndex, 0, removedElement);
    }
  }

  @Mutation
  toggleEditable(editable: boolean): void {
    this.editable = editable;
  }

  @Action
  async copyCode(): Promise<void> {
    try {
      await clipboard(this.code);
      Toast.open('Copied to clipboard!');
    } catch (e) {
      Toast.open({
        message: 'Error while copying, try again',
        type: 'is-danger'
      });
    }
  }

  @Action
  async downloadCode(): Promise<void> {
    function getFilename(src: string): string {
      return src.split('/').pop() || '';
    }

    function urlToPromise(url: string) {
      return new Promise(function (resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err: any, data: any) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }

    try {
      const imagesSrcRegex = /<img.*?src="([^http].*?)"/g;
      const header = `<!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <title>Bulma Building Block</title>
                            <link rel="stylesheet" type="text/css" href="https://unpkg.com/bulmabuildingblocks@0.5.0/dist/bulmabuildingblocks.min.css">
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
                            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                          </head>
                          <body>
                          `;

      const footer = `</body>
                  </html>`;

      let code = await prettier.format(
        header + this.code + footer,
        prettierConf
      );
      const imagesSources = getRegexMatches(code, imagesSrcRegex, 1);

      // Convert img sources to match output folder structure
      for (const imagesSource of imagesSources) {
        const modifiedSrc = getFilename(imagesSource);

        code = replace(code, imagesSource, './images/' + modifiedSrc);
      }

      const zip = new JSZip();
      const img = zip.folder('images');

      for (const imagesSource of imagesSources) {
        // converts the image src into a title
        const modifiedSrc = getFilename(imagesSource);

        img.file(modifiedSrc, urlToPromise(imagesSource), { binary: true });
      }

      zip.file(
        'README.txt',
        'Extract code to a new folder and click the index.html to view the site. '
      );

      // Creates html page from user created content
      zip.file('index.html', code);
      zip.file('bulmabuildingblocks.min.css', BulmaBuildingBlockCss);

      // when everything has been downloaded, we can trigger the dl
      zip.generateAsync({ type: 'blob' }).then(
        function callback(content: string) {
          // see FileSaver.js
          saveAs(content, 'BulmaBuildingBlocks.zip');

          Toast.open('Download Finished');
        },
        function () {
          Toast.open('Download Failed');
        }
      );
    } catch (e) {
      Toast.open({
        message: 'Error while downloading, try again',
        type: 'is-danger'
      });
    }
  }
}

export default getModule(PageBuilderStore);
