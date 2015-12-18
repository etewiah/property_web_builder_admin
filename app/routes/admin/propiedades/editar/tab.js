import Ember from 'ember';
import AdminMeta from '../../../../models/admin_meta';
// var inject = Ember.inject;

export default Ember.Route.extend({
  // configFetcher: inject.service(),
  actions: {
    // had been hoping to be able to refresh data when user decides to cancel edit
    // did not work but rollbackAttributes on model does the trick
    // refetchData() {
    //   var refreshedData = this.store.findRecord('property', 1, { reload: true });
    //   refreshedData.then(function(res){
    //     debugger;
    //     this.controller.set("property", res);
    //   }.bind(this),function(err){
    //     // todo 
    //   });
    //   // debugger;
    //   // this.controller.set("property", refreshedData);
    // }
  },
  model(params) {
    // Model returned here is a set of localised key value pairs
    // that can be used to populate "dynamic-select" input fields
    var fieldNames = "";
    if (params.tabName === "general") {
      fieldNames = "property-origins, property-types, property-states, property-labels";
    }
    if (params.tabName === "situacion") {
      fieldNames = "provinces";
    }
    if (params.tabName === "extras") {
      fieldNames = "extras";
    }
    if (params.tabName === "owner") {
      fieldNames = "clients";
    }


    if (Ember.isEmpty(fieldNames)) {
      return {};
    } else {
      var adminMeta = AdminMeta.get(fieldNames);
      // adminMeta is from http://localhost:3000/api/v1/lang/field_keys/
      // and just returns a list of selectValues for provinces and propertyTypes..
      return adminMeta;
    }
  },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.propiedades.editar.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    controller.set("property", this.modelFor('admin.propiedades.editar'));

    // controller.set("extrasObject", model);
    // var adminController = this.controllerFor("admin");
    controller.set("fieldKeys", model);


    // below doesn't quite work - not sure how to ensure promise is resolved before assigning it
    // var fieldKeys = this.get("configFetcher").getFieldKeys("").then(function(result){
    //   controller.set("fieldKeys", result);
    // }.bind(this));


    controller.set("tabsList", [{
      tabValue: "general",
      tabTitleKey: "propertySections.general"
    },  {
      tabValue: "venta",
      tabTitleKey: "propertySections.sale"
    },{
      tabValue: "situacion",
      tabTitleKey: "propertySections.location"
    }, {
      tabValue: "descripcion",
      tabTitleKey: "propertySections.description"
    }, {
      tabValue: "extras",
      tabTitleKey: "propertySections.extras"
    }, {
      tabValue: "fotos",
      tabTitleKey: "propertySections.photos"
    },{
      tabValue: "owner",
      tabTitleKey: "propertySections.owner"
    }]);
  }
});
