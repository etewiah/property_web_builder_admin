import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
      this.transitionTo("admin.propiedades.list.filter", "all");
  },
});
