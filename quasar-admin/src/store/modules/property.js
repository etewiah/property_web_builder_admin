import axios from 'axios';

const state = {
  properties: []
};

const getters = {
  getProperties: (state) => state.properties
};

const actions = {
  fetchProperties({ commit }) {
    return axios.get('/api/v1/properties').then(response => {
      commit('setProperties', response.data);
    });
  }
};

const mutations = {
  setProperties(state, properties) {
    state.properties = properties;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
