import axios from 'axios';

const state = {
  website: null
};

const getters = {
  getWebsite: (state) => state.website
};

const actions = {
  fetchWebsite({ commit }) {
    return axios.get('/api/v1/website').then(response => {
      commit('setWebsite', response.data);
    });
  }
};

const mutations = {
  setWebsite(state, website) {
    state.website = website;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
