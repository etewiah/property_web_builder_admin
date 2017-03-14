import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  actions: {},

  model(params) {
    return {};
  },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.website.sections.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);
    controller.set("model", model);

    var websiteSectionsTabsList = this.modelFor("admin").setup.get('websiteSectionsTabsList');
    controller.set("tabsList", websiteSectionsTabsList);
    var activeTabObject = websiteSectionsTabsList.findBy("tabValue", activeTabName) || websiteSectionsTabsList[0];
  }
});
