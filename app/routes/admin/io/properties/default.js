import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo("admin.io.properties.tab", "from_mls");
  },
});
