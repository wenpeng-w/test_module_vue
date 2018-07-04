
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

import user from './modules/user';
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    user
  }
});

export default store;
