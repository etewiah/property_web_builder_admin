import Ember from 'ember';
// shortcuts for actions in admin
// - no need for below as they are now retrieved directly from server

export default Ember.Component.extend({
  // todos: function() {
  //   var agencyDetails = this.get("agency.details");
  //   if (agencyDetails && agencyDetails.todos) {
  //     return agencyDetails.todos;
  //   }
  //   return this.get("defaultTodos");
  // }.property(),

  // defaultTodos: [{
  //   titleKey: "todos.createContent",
  //   route: "admin.website",
  //   completed: false
  // }, {
  //   titleKey: "todos.companyDetails",
  //   route: "admin.agency",
  //   completed: true
  // }],

  // actions: {
  //   goToTask: function(route) {
  //     // router is injected here through an initializer
  //     this.get('router').transitionTo(route);
  //   }
  // },

});
