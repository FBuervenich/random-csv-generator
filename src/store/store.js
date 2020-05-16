import Vue from 'vue';
import Vuex from 'vuex';
import * as column from '@/store/modules/column.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    column,
  },
  state: {},
});
