import Ember from 'ember';
import Contact from '../../../models/contact';


export default Ember.Route.extend({
  actions: {
  },
  model(params) {
    var contactToEdit = Contact.getSingle(params.id);
    return contactToEdit;
    // return this.store.findRecord('client', params.id);
  },

});

