import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // editclient(client) {
    //   this.transitionTo("admin.propiedades.editar", client.get('idPropiedad'))
    // }
  },
  model(params) {
    return this.store.findRecord('client', params.id);
  },

});

