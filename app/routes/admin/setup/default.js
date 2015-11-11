import Ember from 'ember';

export default Ember.Route.extend({
//   beforeModel: function(){
//       this.transitionTo("admin.content.tab", "home");
//   },
  actions: {
    goToTask: function(taskId){
      // debugger;
    }
  },

  setupController(controller, model) {
    model = [
      {title: "Create some content"}
    ];
    controller.set("content", model);
  }
});
