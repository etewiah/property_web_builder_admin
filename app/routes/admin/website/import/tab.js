import Ember from 'ember';
import Theme from '../../../../models/theme';
// path is actually /admin/website

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  actions: {

  },

  importUrl: function () {
    debugger;
    return "/ddd";
  },

  model(params) {
    return {};
    // if (params.tabName === "sections") {
    //   return this.store.findAll("section");
    // }
    // if (params.tabName === "appearance") {
    //   return Theme.getAll();
    // }
    // return this.store.query("webContent", {
    //   filter: {
    //     tag: params.tabName
    //   }
    // });
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.website.import.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);


    // controller.set("languages", websiteDetails.supported_locales);

    var importExportTabsList = this.modelFor("admin").setup.get('importExportTabsList');
    controller.set("tabsList",importExportTabsList);
    var activeTabObject = importExportTabsList.findBy("tabValue",activeTabName);
    controller.set("activeTabObject", activeTabObject);
    var importUrl = activeTabObject.importUrl;
     // "/import/translations";
    // controller.set("importUrl",importUrl);
    // controller.set("importUrl", activeTabObject.importUrl);
  }
});