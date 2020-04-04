import { Module, Mutation, VuexModule, getModule, Action } from 'vuex-module-decorators';
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
  components: Snippet[] = [];
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
  addSnippet(component: Snippet): void {
    this.components.push(_.cloneDeep(component));
  }

  @Mutation
  removeComponent(component: Snippet): void {
    this.components.splice(this.components.indexOf(component), 1);
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
      const formattedHtml = prettier.format(html, prettierConf);
      this.setCode(formattedHtml);
      clipboard(this.code);
      Toast.open('Copied to clipboard!');
      this.setCopyingCode(false);
      resolve();
    });
  }
}

export default getModule(PageBuilderStore);
