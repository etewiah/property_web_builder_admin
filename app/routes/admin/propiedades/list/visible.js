import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query("property", {
      filter: {
        visible: "true"
      }
    });
    // return this.store.findAll('property'); 
  },
});
