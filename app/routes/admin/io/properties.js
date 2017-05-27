import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  },

  // model(params) {
  //   // setupController will not get called if model does not change
  //   return params;
  // },


  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.io.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);
  }


});
