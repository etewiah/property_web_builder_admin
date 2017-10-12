import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),

  beforeModel: function() {
    this.transitionTo("admin.pages.page.tab", "content_html")
  },

});
