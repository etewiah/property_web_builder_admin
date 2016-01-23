import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query("liteProperty", {
      filter: {
        visible: "true"
      }
    });
    // return this.store.findAll('property'); 
  },
});
