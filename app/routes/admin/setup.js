import Ember from 'ember';
import Agency from '../../models/agency'

export default Ember.Route.extend({
  actions: {
    goToTask: function(taskId){
      debugger;
    }
  },
  model() {
    var agencyDetails = Agency.get();
    return agencyDetails; 
  },
  setupController(controller, model) {
    var defaultTodoList = [
      {title: "Create some content"}
    ];
    controller.set("content", defaultTodoList);
  }
});
