import Ember from 'ember';
// import AdminMeta from '../../../models/admin_meta';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },

  // model(params) {
  //   // setupController will not get called if model does not change
  //   return params;
  // },


  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.io.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);


    // controller.set("languages", websiteDetails.supported_locales);

    var importExportTabsList = this.modelFor("admin").setup.get('importExportTabsList');
    controller.set("tabsList",importExportTabsList);
    var activeTabObject = importExportTabsList.findBy("tabValue",activeTabName) || importExportTabsList[0];
    controller.set("activeTabObject", activeTabObject);
    // var importUrl = activeTabObject.importUrl;

    var tabsWebsiteComponent = "tabs-io/" + activeTabName + "-tab";
    controller.set("tabs-io-component", tabsWebsiteComponent);
  }


});
