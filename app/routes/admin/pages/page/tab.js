import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),

  model(params) {
    var currentSection = this.modelFor("admin.pages.page");
    var label = "";
    if (currentSection.get("cmsPartsList")) {
      var cmsPartInfo = currentSection.cmsPartsList.findBy("tabValue", params.tabName);
      label = cmsPartInfo.label
    }
    return this.store.query("cmsPage", {
      filter: {
        label: label
      }
    });
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.pages.page.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);

    var websiteDetails = this.modelFor("admin").websiteDetails;
    // controller.set("websiteDetails", websiteDetails);

    controller.set("languages", websiteDetails.supported_locales);

    var currentSection = this.modelFor("admin.pages.page");
    var cmsPartInfo = currentSection.cmsPartsList.findBy("tabValue", activeTabName);
    controller.set("cmsPartsList", currentSection.cmsPartsList);
    controller.set("cmsPartInfo", cmsPartInfo);

  }
});
