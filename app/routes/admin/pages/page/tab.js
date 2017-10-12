import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),

  model(params) {
    var currentPwbPage = this.modelFor("admin.pages.page");
    // var currentPagePart = currentPwbPage.get("fragmentConfigs").findBy("tabValue", params.tabName);
    // if (currentPagePart && currentPagePart.isLegacy) {
    //   debugger;
    //   return this.store.query("webContent", {
    //     filter: {
    //       tag: params.tabName
    //     }
    //   });
    // }

    // data for each page fragment is saved in page
    // and does not need to be retrieved here 
    return {};
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
    controller.set("pageParts", currentPwbPage.get("pageParts"));
    // controller.set("fragmentConfigs", currentPwbPage.get("fragmentConfigs"));

    var currentPagePart = currentPwbPage.getPagePart(activeTabName);
    // var currentPagePart = currentPwbPage.get("fragmentConfigs").findBy("tabValue", activeTabName);
    // if (currentPagePart && currentPagePart.isLegacy) {
    //   debugger;
    //   var tabsPageComponent = "tabs-website/" + activeTabName + "-tab";
    //   controller.set("tabs-page-component", tabsPageComponent);
    //   controller.set("currentPagePart", null);
    // } else {
    //   controller.set("tabs-page-component", "tabs-cms/fragments-container")
    //   controller.set("currentPagePart", currentPagePart);
    // }

    controller.set("tabs-page-component", "tabs-cms/fragments-container")
    controller.set("currentPagePart", currentPagePart);


  }
});
