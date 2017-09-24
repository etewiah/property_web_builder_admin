import Ember from 'ember';
import Contact from '../../models/contact';

export default Ember.Route.extend({
  actions: {
    // editClient(client) {
    //   this.transitionTo("admin.clients.edit", client.get('id'));
    // }
  },
  model() {
    var contacts = Contact.getAll();
    return contacts;
    // return this.store.findAll('client'); 
  },
  // setupController(controller, model) {
  //   debugger;
  // }
});
