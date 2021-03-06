import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('property', params.idPropiedad);
  },
  actions: {
    error: function (error) {
      Ember.Logger.error(error);
      // debugger;
      this.transitionTo("admin.propiedades.list.default");
    }
  },
  // setupController(controller, model) {
  //   debugger;
  // }

});
