import Ember from 'ember';
// import Theme from '../../../models/theme';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  actions: {
  },

  model(params) {
    return this.store.findAll("section");
  },

  setupController(controller, model) {
    controller.set("model", model);
  }
});
