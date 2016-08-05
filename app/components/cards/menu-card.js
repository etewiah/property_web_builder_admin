import Ember from 'ember';


export default Ember.Component.extend({
  todos: function() {
    var agencyDetails = this.get("agency.details");
    if (agencyDetails && agencyDetails.todos) {
      return agencyDetails.todos;
    }
    debugger;
    return this.get("defaultTodos");
  }.property(),

  defaultTodos: [{
    titleKey: "todos.createContent",
    route: "admin.website",
    completed: false
  }, {
    titleKey: "todos.companyDetails",
    route: "admin.agency",
    completed: true
  }],

  actions: {
    goToTask: function(route) {
      // debugger;
      // router is injected here through an initializer
      this.get('router').transitionTo(route);
    }
  },

});
