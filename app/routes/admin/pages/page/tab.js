import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),

  model(params) {
    var currentPage = this.modelFor("admin.pages.page");
    var currentSection = currentPage.details.cmsPartsList.findBy("tabValue", params.tabName);
    if (currentSection.isLegacy) {
      return this.store.query("webContent", {
        filter: {
          tag: params.tabName
        }
      });
    }
    var label = currentSection.label;
    // if (currentPage.get("cmsPartsList")) {
    //   var cmsPartInfo = currentPage.details.cmsPartsList.findBy("tabValue", params.tabName);
    //   label = cmsPartInfo.label
    // }
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
    controller.set("languages", websiteDetails.supported_locales);

    var currentPage = this.modelFor("admin.pages.page");

    controller.set("cmsPartsList", currentPage.details.cmsPartsList);
    var currentSection = currentPage.details.cmsPartsList.findBy("tabValue", activeTabName);
    if (currentSection.isLegacy) {
      var tabsPageComponent = "tabs-website/" + activeTabName + "-tab";
      controller.set("tabs-page-component", tabsPageComponent);
      // var cmsPartInfo = currentPage.details.cmsPartsList.findBy("tabValue", activeTabName);
      controller.set("cmsPartInfo", null);
      // if (currentPage.details.cmsPartsList.length < 2) {
      //   // for legacy about-us pages etc, do not show tabs if there is only one
      //   controller.set("cmsPartsList", []);
      // }

    } else {
      controller.set("tabs-page-component", "tabs-cms/cms-container")
      var cmsPartInfo = currentPage.details.cmsPartsList.findBy("tabValue", activeTabName);
      controller.set("cmsPartInfo", cmsPartInfo);
    }

  }
});
