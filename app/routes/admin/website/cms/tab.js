import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  // actions: {
  //   // https://guides.emberjs.com/v1.10.0/routing/preventing-and-retrying-transitions/
  //   // below should stop users from navigating away from a page with outstanding changes
  //   // - does not work for social_media links on admin/website/general route though
  //   // because object being operated on there is not the model from this controller..
  //   willTransition: function(transition) {
  //       var contentResources = this.controller.get("model");
  //       // debugger;
  //       var hasDirtyRecords = false;
  //       contentResources.forEach(function(resource) {
  //         if (resource.get("hasDirtyAttributes")) {
  //           hasDirtyRecords = true;
  //         }
  //       });
  //       var i18n = this.get('i18n');
  //       // if (hasDirtyRecords &&
  //       //     !confirm("Are you sure you want to abandon progress?")) {
  //       if (hasDirtyRecords) {
  //         var message = i18n.t("alerts.navigatingFromChanges").toString();
  //         sweetAlert(message);
  //         transition.abort();
  //       } else {
  //         // Bubble the `willTransition` action so that
  //         // parent routes can decide whether or not to abort.
  //         return true;
  //       }
  //     }
  // },


  model(params) {
    var currentSection = this.modelFor("admin.website.cms");
    var cmsPartInfo = currentSection.cmsPartsList.findBy("tabValue", params.tabName);
    return this.store.query("cmsPage", {
      filter: {
        label: cmsPartInfo.label
      }
    });
    // return this.store.findAll('cmsPage'); 
    // return params.tabName;
    // return this.store.findRecord('cmsPage', "test");
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.website.cms.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);

    var websiteDetails = this.modelFor("admin").websiteDetails;
    // controller.set("websiteDetails", websiteDetails);

    controller.set("languages", websiteDetails.supported_locales);

    var currentSection = this.modelFor("admin.website.cms");
    var cmsPartInfo = currentSection.cmsPartsList.findBy("tabValue", activeTabName);
    controller.set("cmsPartsList", currentSection.cmsPartsList);
    controller.set("cmsPartInfo", cmsPartInfo);

  }
});
