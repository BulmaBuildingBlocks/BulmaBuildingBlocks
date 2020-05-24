import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { setCookie } from '../shared/storage';
import { App } from '~/store/app';
import { PageBuilderStore } from '~/store/pageBuilder';

Vue.use(Vuex);

export interface RootState {
  App: App;
  PageBuilderStore: PageBuilderStore;
}

const plugins: any = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push(createLogger({ collapsed: false }));
}

export const store = new Vuex.Store<RootState>({
  /*
  Ideally if all your modules are dynamic
  then your store is registered initially
  as a completely empty object
  */
  plugins
});

store.watch(
  // When the returned result changes...
  function (state) {
    console.log('STATE', state);
    if (state.PageBuilderStore) {
      return state.PageBuilderStore.blocks;
    }
  },
  // Run this callback
  function (data) {
    console.log('CHANGED', data);
    if (process.client) {
      setCookie('blocks', JSON.stringify(data));
    }
  },
  {
    deep: true
  }
);

export const createStore = store;
