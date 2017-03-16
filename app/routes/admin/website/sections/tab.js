import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  actions: {},

  model(params) {
    // setupController will not get called if model does not change
    return params;
    // return this.store.findAll("section");
  },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.website.sections.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    var sections = this.modelFor("admin.website.sections");
    controller.set("sections", sections);
    var sectionInView = sections.findBy("linkKey", activeTabName);
     // || websiteSectionsTabsList[0];
    controller.set("sectionInView", sectionInView);

    var websiteSectionsTabsList = this.modelFor("admin").setup.get('websiteSectionsTabsList');
    controller.set("tabsList", websiteSectionsTabsList);
    var activeTabObject = websiteSectionsTabsList.findBy("tabValue", activeTabName) || websiteSectionsTabsList[0];

  }
});
