import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  // actions: {
  //   willTransition: function(transition) {
  //     debugger;
  //     var changedFields = this.controller.get("changedFields");
  //     var i18n = this.get('i18n');

  //     // if (property.get("hasDirtyAttributes")) {
  //     // using above was too flakey - sometimes a null input field would change to "" when you type and delete..
  //     if (changedFields.length > 0) {
  //       var message = i18n.t("alerts.navigatingFromChanges").toString();
  //       sweetAlert(message);
  //       transition.abort();
  //     } else {
  //       // Bubble the `willTransition` action so that
  //       // parent routes can decide whether or not to abort.
  //       return true;
  //     }
  //   }
  // },
  model(params) {
    var currentPwbPage = this.modelFor("admin.pages.page");
    var currentSection = currentPwbPage.details.cmsPartsList.findBy("tabValue", params.tabName);
    if (currentSection.isLegacy) {
      return this.store.query("webContent", {
        filter: {
          tag: params.tabName
        }
      });
    }
    var label = currentSection.label;
    // if (currentPwbPage.get("cmsPartsList")) {
    //   var cmsPartInfo = currentPwbPage.details.cmsPartsList.findBy("tabValue", params.tabName);
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
    // controller.set("languages", websiteDetails.supported_locales);
    controller.set("shortLocaleCodes", websiteDetails.sl_without_variants);

    var currentPwbPage = this.modelFor("admin.pages.page");
    controller.set("currentPwbPage", currentPwbPage);

    controller.set("cmsPartsList", currentPwbPage.details.cmsPartsList);
    var currentSection = currentPwbPage.details.cmsPartsList.findBy("tabValue", activeTabName);
    if (currentSection.isLegacy) {
      var tabsPageComponent = "tabs-website/" + activeTabName + "-tab";
      controller.set("tabs-page-component", tabsPageComponent);
      // var cmsPartInfo = currentPwbPage.details.cmsPartsList.findBy("tabValue", activeTabName);
      controller.set("cmsPartInfo", null);
    } else if (activeTabName === "html") {
      controller.set("tabs-page-component", "tabs-cms/page-html")
    } else {
      controller.set("tabs-page-component", "tabs-cms/cms-container")
        // var cmsPartInfo = currentPwbPage.details.cmsPartsList.findBy("tabValue", activeTabName);
      controller.set("cmsPartInfo", currentSection);
    }

  }
});
