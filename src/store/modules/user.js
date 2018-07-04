import {
  SET_USER
} from '../mutations-types';

const state = {
  user: {}
};

const mutations = {
  [SET_USER] (state, user) {
    state.user = user;
  }
};

const actions = {
  [SET_USER] ({commit}, userInfo) {
    commit('SET_USER', userInfo);
  }
};

const getters = {
  userInfo (state) {
    return state.user;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
