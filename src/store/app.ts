import { Module, VuexModule, getModule } from 'vuex-module-decorators';
import { store } from '~/store/index';

@Module({
  name: 'app',
  dynamic: true,
  store
})
export class App extends VuexModule {}

export default getModule(App);
