import Vue from 'vue';
import Vuex from 'vuex';
import * as settings from '@/store/modules/exportSettings.js';
import * as column from '@/store/modules/column.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    settings,
    column,
  },
});
