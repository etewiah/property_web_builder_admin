import Ember from 'ember';
// import AdminMeta from '../../../models/admin_meta';

export default Ember.Route.extend({
  actions: {
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

    var importPropertiesTabsList = this.modelFor("admin").setup.get('importPropertiesTabsList');
    controller.set("tabsList",importPropertiesTabsList);
    var activeTabObject = importPropertiesTabsList.findBy("tabValue",activeTabName) || importPropertiesTabsList[0];
    controller.set("activeTabObject", activeTabObject);

  }


});
