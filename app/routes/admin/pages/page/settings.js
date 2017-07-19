import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),
  setupController(controller, model) {
    // var activeTabName = this.paramsFor('admin.pages.page.tab').tabName || "";
    // activeTabName = activeTabName.toLowerCase();
    // controller.set("activeTabName", activeTabName);
    // controller.set("model", model);
    // var websiteDetails = this.modelFor("admin").websiteDetails;

    var currentPage = this.modelFor("admin.pages.page");
    controller.set("cmsPartsList", currentPage.details.cmsPartsList);
    controller.set("currentPage", currentPage);
    var websiteDetails = this.modelFor("admin").websiteDetails;
    controller.set("shortLocaleCodes", websiteDetails.sl_without_variants);

  }
});
