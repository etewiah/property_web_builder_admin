import Ember from 'ember';
// import Theme from '../../../models/theme';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  actions: {
  },

  model(params) {
    return {};
  },

  setupController(controller, model) {

    controller.set("model", model);

  }
});
