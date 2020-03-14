import { Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators';
import { store } from '~/store/index';

@Module({
  name: 'app',
  dynamic: true,
  store
})
export class App extends VuexModule {
  menuActive = false;

  @Mutation
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}

export default getModule(App);
