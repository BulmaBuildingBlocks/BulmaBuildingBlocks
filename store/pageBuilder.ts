import { Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';
import { store } from '~/store/index';
import { ISnippet } from '@/types/ISnippet';

@Module({
  name: 'PageBuilderStore',
  dynamic: true,
  store
})
export class PageBuilderStore extends VuexModule {
  code = '';
  components: ISnippet[] = [];
  showComponents = true;

  @Mutation
  addComponent(component: ISnippet) {
    this.components.push(component);
  }

  @Mutation
  removeComponent(component: ISnippet) {
    this.components.splice(this.components.indexOf(component), 1);
  }

  @Mutation
  toggleShowComponent(show: boolean) {
    this.showComponents = show;
  }

  @Mutation
  updateCode(code: string) {
    this.code = code;
  }
}

export default getModule(PageBuilderStore);
