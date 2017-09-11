import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),

  model(params) {
    var currentPwbPage = this.modelFor("admin.pages.page");
    var currentSection = currentPwbPage.fragment_configs.findBy("tabValue", params.tabName);
    if (currentSection.isLegacy) {
      return this.store.query("webContent", {
        filter: {
          tag: params.tabName
        }
      });
    }
    var label = currentSection.label;
    return {};
    // return this.store.query("cmsPage", {
    //   filter: {
    //     label: label
    //   }
    // });
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.pages.page.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);

    var websiteDetails = this.modelFor("admin").websiteDetails;
    // controller.set("languages", websiteDetails.supported_locales);
    controller.set("shortLocaleCodes", websiteDetails.sl_without_variants);

    var currentPwbPage = this.modelFor("admin.pages.page");
    controller.set("currentPwbPage", currentPwbPage);

    // below for navigation tabs
    controller.set("cmsPartsList", currentPwbPage.fragment_configs);
    var currentSection = currentPwbPage.fragment_configs.findBy("tabValue", activeTabName);
    if (currentSection.isLegacy) {
      var tabsPageComponent = "tabs-website/" + activeTabName + "-tab";
      controller.set("tabs-page-component", tabsPageComponent);
      // var cmsPartInfo = currentPwbPage.fragment_configs.findBy("tabValue", activeTabName);
      controller.set("cmsPartInfo", null);
    } else if (activeTabName === "html") {
      // raw-html which is stored in page
      controller.set("tabs-page-component", "tabs-cms/page-html")
    } else {
      controller.set("tabs-page-component", "tabs-cms/fragments-container")
        // var cmsPartInfo = currentPwbPage.fragment_configs.findBy("tabValue", activeTabName);
      controller.set("cmsPartInfo", currentSection);
    }

  }
});
