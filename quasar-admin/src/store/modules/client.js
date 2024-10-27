import axios from 'axios';

const state = {
  clients: []
};

const getters = {
  getClients: (state) => state.clients
};

const actions = {
  fetchClients({ commit }) {
    return axios.get('/api/v1/clients').then(response => {
      commit('setClients', response.data);
    });
  }
};

const mutations = {
  setClients(state, clients) {
    state.clients = clients;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
