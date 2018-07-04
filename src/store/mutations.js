import {
  SET_HEADER
} from './mutations-types';

const mutations = {
  [SET_HEADER] (state, header) {
    state.headerTitle = header;
  }
};

export default mutations;
