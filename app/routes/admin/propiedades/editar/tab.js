import Ember from 'ember';
import AdminMeta from '../../../../models/admin_meta';
// var inject = Ember.inject;

export default Ember.Route.extend({
  // configFetcher: inject.service(),

  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
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

    if (Ember.isEmpty(fieldNames)) {
      return {};
    } else {
      var adminMeta = AdminMeta.get(fieldNames);
      // adminMeta is from http://localhost:3000/api/v1/lang/field_keys/
      // and just returns a list of selectValues for provinces and propertyTypes..
      return adminMeta;
    }

    // var extras = Extras.get(this.paramsFor('admin.propiedades.editar').idPropiedad);
    // return extras;
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
      tabTitle: "General"
    }, {
      tabValue: "situacion",
      tabTitle: "Situación"
    }, {
      tabValue: "descripcion",
      tabTitle: "Descripción"
    }, {
      tabValue: "extras",
      tabTitle: "Extras"
    }, {
      tabValue: "fotos",
      tabTitle: "Fotos"
    }, {
      tabValue: "venta",
      tabTitle: "Venta"
    }]);
  }
});
