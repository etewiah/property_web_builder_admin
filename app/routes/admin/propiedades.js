import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editProperty(property) {
      this.transitionTo("admin.propiedades.editar", property.get('id') );
    }
  },
  // model() {
  //   return this.store.findAll('property'); 
  // },
  // setupController(controller, model) {
  //   debugger;
  // }
});
