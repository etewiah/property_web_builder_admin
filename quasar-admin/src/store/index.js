import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import user from './modules/user';
import property from './modules/property';
import contact from './modules/contact';
import agency from './modules/agency';
import client from './modules/client';
import website from './modules/website';

export default store(function () {
  const Store = createStore({
    modules: {
      user,
      property,
      contact,
      agency,
      client,
      website
    },
    strict: process.env.DEBUGGING
  });

  return Store;
});
