import Ember from 'ember';
// path is actually /admin/website

export default Ember.Route.extend({
  beforeModel: function(){
      this.transitionTo("admin.content.tab", "general");
  },
});
