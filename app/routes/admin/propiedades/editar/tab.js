import Ember from 'ember';
import Extras from '../../../../models/extras';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    var extras = Extras.get(this.paramsFor('admin.propiedades.editar').idPropiedad);
    return extras;
  },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.propiedades.editar.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    controller.set("property", this.modelFor('admin.propiedades.editar'));
    // TODO - get extras from model above and remove line below
    controller.set("extrasObject", model);
    var adminController = this.controllerFor("admin");
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
