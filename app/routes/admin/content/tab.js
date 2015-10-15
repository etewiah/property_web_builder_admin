import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  // model(params) {
  //   // debugger;
  //   var extras = Extras.get(this.paramsFor('admin.propiedades.editar').idPropiedad);
  //   return extras;
  // },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.content.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    controller.set("property", this.modelFor('admin.propiedades.editar'));
    // TODO - get extras from model above and remove line below
    controller.set("extrasObject", model);
    var adminController = this.controllerFor("admin");
    // debugger;
    controller.set("fieldKeys", adminController.fieldKeys);
    
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
