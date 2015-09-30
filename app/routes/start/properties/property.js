import Ember from 'ember';

export default Ember.Route.extend({
  // actions: {
  //   goToProperty(id) {
  //     this.transitionTo("start.properties.property", id)
  //   }
  // },
  model(params) {
    // debugger;
    return this.store.findRecord('property', params.ref);

  },
  // setupController(controller, model) {
  //   debugger;
  // }
});
