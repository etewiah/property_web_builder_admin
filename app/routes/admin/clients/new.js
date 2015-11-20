import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    return this.store.createRecord('client');
  },

});
