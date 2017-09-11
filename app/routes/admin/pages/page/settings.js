import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),
  actions: {
    willTransition: function(transition) {
      var changedFields = this.controller.get("changedFields");
      var i18n = this.get('i18n');
      if (changedFields.length > 0) {
        var message = i18n.t("alerts.navigatingFromChanges").toString();
        sweetAlert(message);
        transition.abort();
      } else {
        // Bubble the `willTransition` action so that
        // parent routes can decide whether or not to abort.
        return true;
      }
    }
  },

  model(params) {
    var currentPwbPage = this.modelFor("admin.pages.page");
    return currentPwbPage;
  },
  setupController(controller, model) {
    controller.set("changedFields", []);
    // below for navigation tabs
    controller.set("cmsPartsList", model.fragment_configs);
    controller.set("model", model);
    var websiteDetails = this.modelFor("admin").websiteDetails;
    controller.set("shortLocaleCodes", websiteDetails.sl_without_variants);

  }
});
