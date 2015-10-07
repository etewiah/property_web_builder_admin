import Ember from 'ember';
import Extras from '../../../../models/extras';

export default Ember.Route.extend({
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    // debugger;
    var extras = Extras.get(this.paramsFor('admin.propiedades.editar').idPropiedad);
    return extras;
  },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.propiedades.editar.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    controller.set("property", this.modelFor('admin.propiedades.editar'));
    controller.set("extrasObject", model);
  }
});
