import Ember from 'ember';
import Contact from '../../../models/contact';

export default Ember.Route.extend({
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    var newContact = Contact.create({});
    return newContact;
    // return this.store.createRecord('client');
  },

});
