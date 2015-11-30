import Ember from 'ember';
import Agency from '../../models/agency'

export default Ember.Route.extend({
  // model() {
  //   var agencyDetails = Agency.get();
  //   return agencyDetails; 
  // },
  setupController(controller, model) {
    controller.set("agency", this.modelFor("admin").agencyDetails);
    // var defaultTodoList = [
    //   {title: "Create some content..."}
    // ];
    // controller.set("content", defaultTodoList);
  }
});
