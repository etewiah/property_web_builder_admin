import Ember from 'ember';
import AdminMeta from '../../../models/admin_meta';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  // model(params) {
  //   var fieldNames = "";
  //   if (params.tabName === "user") {
  //     // debugger;
  //   }
  //   if (params.tabName === "location") {
  //     fieldNames = "provinces";
  //   }

  //   if (Ember.isEmpty(fieldNames)) {
  //     return {};
  //   } else {
  //     var adminMeta = AdminMeta.get(fieldNames);
  //     // adminMeta is from http://localhost:3000/api/v1/lang/field_keys/
  //     // and just returns a list of selectValues for provinces and propertyTypes..
  //     return adminMeta;
  //   }

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
    var importUrl = activeTabObject.importUrl;
     // "/import/translations";
    // controller.set("importUrl",importUrl);
    // controller.set("importUrl", activeTabObject.importUrl);
  }


  // // setupController will not get called if model does not change
  // // eg if I returned a query that was not dependant on params....
  // setupController(controller, model) {
  //   var activeTabName = this.paramsFor('admin.agency.tab').tabName || "";
  //   controller.set("activeTabName", activeTabName.toLowerCase());
  //   // controller.set("contentResources", this.modelFor('admin.website'));
  //   controller.set("fieldKeys", model);
  //   controller.set("agencyDetails", this.modelFor("admin").agencyDetails);
  //   controller.set("primaryAddress", this.modelFor("admin").primaryAddress);
  //   controller.set("currentUser", this.modelFor("admin").currentUser);
  //   var agencyTabsList = this.modelFor("admin").setup.get('agencyTabsList');
  //   controller.set("tabsList",agencyTabsList);
  // }
});