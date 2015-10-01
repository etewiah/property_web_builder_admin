import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  // model(params) {
  //   debugger;
  //   // return this.store.findAll('property'); // or any other user you like
  // },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.propiedades.editar.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    // debugger;
    controller.set("property", this.modelFor('admin.propiedades.editar'));
    // if (this.paramsFor('admin.propiedades.editar.tab').tabName.toLowerCase() === "descripcion") {
    //   controller.set('descriptionTab', true);
    // };
    // if (this.paramsFor('admin.propiedades.editar.tab').tabName === "tt") {
    //   controller.set('ttTab', true);
    // };
  }
});
