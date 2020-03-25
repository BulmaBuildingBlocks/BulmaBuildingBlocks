import { Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';
import { store } from '~/store/index';

@Module({
  name: 'PageBuilderStore',
  dynamic: true,
  store
})
export class PageBuilderStore extends VuexModule {
  code = '';
  components: Function[] = [];
  showComponents = true;

  @Mutation
  addComponent(component: any) {
    this.components.push(component);
  }

  @Mutation
  removeComponent(component: any) {
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
