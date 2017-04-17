import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // this.transitionTo("admin.io.tab", "properties");
    this.transitionTo("admin.io.properties");
  },
});
