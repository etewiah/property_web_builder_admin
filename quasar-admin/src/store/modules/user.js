import axios from 'axios';

const state = {
  user: null
};

const getters = {
  getUser: (state) => state.user
};

const actions = {
  fetchUser({ commit }) {
    return axios.get('/api/v1/user').then(response => {
      commit('setUser', response.data);
    });
  }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
