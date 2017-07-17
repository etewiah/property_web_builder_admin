import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),

  beforeModel: function() {
    var currentPage = this.modelFor("admin.pages.page");
    this.transitionTo("admin.pages.page.tab", currentPage.get("details.cmsPartsList.firstObject.tabValue"));
  },

});
