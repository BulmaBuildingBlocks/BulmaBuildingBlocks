import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { App } from '~/store/app';
import { PageBuilderStore } from '~/store/pageBuilder';

Vue.use(Vuex);

export interface RootState {
  app: App;
  pageBuilder: PageBuilderStore;
}

export const store = new Vuex.Store<RootState>({
  /*
  Ideally if all your modules are dynamic
  then your store is registered initially
  as a completely empty object
  */
  plugins:
    process.env.NODE_ENV !== 'production'
      ? [createLogger({ collapsed: false })]
      : []
});

export const createStore = store;
