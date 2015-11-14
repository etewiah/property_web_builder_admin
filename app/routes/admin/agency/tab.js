import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    return this.store.query("webContent", {
      filter: {
        tag: params.tabName
      }
    });
    // return this.store.findAll('webContent'); 
    // return params.tabName;
    // return this.store.findRecord('webContent', "test");
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.agency.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    // controller.set("contentResources", this.modelFor('admin.content'));
    controller.set("contentResources", model);


    controller.set("tabsList", [{
      tabValue: "general",
      tabTitleKey: "agencySections.general"
    }, {
      tabValue: "location",
      tabTitleKey: "agencySections.location"
    }]);
  }
});
