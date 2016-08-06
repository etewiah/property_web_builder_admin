import Ember from 'ember';
// import SiteTemplate from '../../../models/site-template';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),



  model(params) {
    var whitelabelSuffix = location.hostname.split(".")[1].toLowerCase() ;
    var contentTag = "wl_" + whitelabelSuffix;

    return this.store.query("webContent", {
      filter: {
        tag: contentTag
      }
    });
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    // var activeTabName = this.paramsFor('admin.website.pages.page').pageName || "";
    // activeTabName = activeTabName.toLowerCase();
    // controller.set("activeTabName", activeTabName);

    var supportedLanguages = this.modelFor("admin").tenantDetails.supported_languages || ["es"];
    controller.set("languages", supportedLanguages);
    var tabsList = [{
        tabValue: "general",
        tabTitleKey: "webContentSections.general"
      }
    ];
    model.content.forEach(
      function(contentModel) {
        tabsList.push({
          tabValue: contentModel.record.get("key"),
          tabTitleKey: contentModel.record.get("key")
        });
        // body...
      }
      );
    controller.set("tabsList", tabsList);
  }
});
