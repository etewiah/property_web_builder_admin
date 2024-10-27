import axios from 'axios';

const state = {
  agency: null
};

const getters = {
  getAgency: (state) => state.agency
};

const actions = {
  fetchAgency({ commit }) {
    return axios.get('/api/v1/agency').then(response => {
      commit('setAgency', response.data);
    });
  }
};

const mutations = {
  setAgency(state, agency) {
    state.agency = agency;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
