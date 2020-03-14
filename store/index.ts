import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { App } from '~/store/app';

Vue.use(Vuex);

export interface IRootState {
  app: App;
}

export const store = new Vuex.Store<IRootState>({
  /*
  Ideally if all your modules are dynamic
  then your store is registered initially
  as a completely empty object
  */
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger({ collapsed: false })] : []
});

export const createStore = store;
