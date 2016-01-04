import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query("property", {
      filter: {
        visible: "false"
      }
    });
    // return this.store.findAll('property'); 
  },
});
