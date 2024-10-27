import axios from 'axios';

const state = {
  contacts: []
};

const getters = {
  getContacts: (state) => state.contacts
};

const actions = {
  fetchContacts({ commit }) {
    return axios.get('/api/v1/contacts').then(response => {
      commit('setContacts', response.data);
    });
  }
};

const mutations = {
  setContacts(state, contacts) {
    state.contacts = contacts;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
