import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findRecord('user', 'frank06'); // or any other user you like
    },
    // setupController(controller, model) {
    //   debugger;
    // }
});
