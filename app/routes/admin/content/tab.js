import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model() {
    // TODO - filter search to content relevant to tab
    // return this.store.findAll('content'); 
    return this.store.findRecord('webContent', "test");

  },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.content.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    // controller.set("property",  this.modelFor('admin.content'));
    // debugger;
    controller.set("contentResources", model);


    // controller.set("extrasObject", model);
    // var adminController = this.controllerFor("admin");
    // // debugger;
    // controller.set("fieldKeys", adminController.fieldKeys);

    controller.set("tabsList", [{
      tabValue: "inicio",
      tabTitle: "inicio"
    }, {
      tabValue: "descripcion",
      tabTitle: "Descripción"
    }]);
  }
});
