import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo("admin.website.themes.theme", "default");
  },
});
