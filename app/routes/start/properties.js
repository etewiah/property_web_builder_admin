import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToProperty(id) {
      this.transitionTo("start.properties.property", id)
    }
  },
  model() {
    return this.store.findAll('property'); // or any other user you like
  },
  // setupController(controller, model) {
  //   debugger;
  // }
});
