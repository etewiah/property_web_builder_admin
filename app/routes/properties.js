import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('property'); // or any other user you like
    },
    // setupController(controller, model) {
    //   debugger;
    // }
});
