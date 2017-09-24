import Ember from 'ember';
import Contact from '../../../models/contact';


export default Ember.Route.extend({
  actions: {
    // editclient(client) {
    //   this.transitionTo("admin.propiedades.editar", client.get('idPropiedad'))
    // }
  },
  model(params) {

    var contactToEdit = Contact.getSingle(params.id);
    debugger;
    return contactToEdit;
    // return this.store.findRecord('client', params.id);
  },

});

