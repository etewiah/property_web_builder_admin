import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editClient(client) {
      this.transitionTo("admin.clients.edit", client.get('id') );
    }
  },
  model() {
    return this.store.findAll('client'); 
  },
  // setupController(controller, model) {
  //   debugger;
  // }
});
