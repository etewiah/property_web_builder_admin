import Ember from 'ember';
// import SiteTemplate from '../../../models/site-template';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),



  // model(params) {
  //   return this.store.query("webContent", {
  //     filter: {
  //       tag: params.pageName
  //     }
  //   });
  // },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.website.pages.page').pageName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    // controller.set("model", model);

    controller.set("agencyDetails", this.modelFor("admin").agencyDetails);
    controller.set("tenantDetails", this.modelFor("admin").tenantDetails);
    // controller.set("primaryAddress", this.modelFor("admin").primaryAddress);
    // controller.set("currentUser", this.modelFor("admin").currentUser);


    var supportedLanguages = this.modelFor("admin").tenantDetails.supported_languages || ["es"];
    controller.set("languages", supportedLanguages);

    controller.set("tabsList", [{
        tabValue: "general",
        tabTitleKey: "webContentSections.general"
      }, {
        tabValue: "landing-carousel",
        tabTitleKey: "webContentSections.landingCarousel"
      }, {
        tabValue: "content-area-cols",
        tabTitleKey: "webContentSections.contentAreaCols",
      }, {
        tabValue: "about-us",
        tabTitleKey: "webContentSections.aboutUs"
      }, {
        tabValue: "legal",
        tabTitleKey: "webContentSections.legal"
      }

    ]);
  }
});
