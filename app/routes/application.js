import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    setActiveLeftNav: function() {
      var applicationController = this.controllerFor("application");
      var currentRouteName = applicationController.currentRouteName;
      var activeTabRoute = "admin.inicio";
      // TODO - improve this logic a bit...
      if (currentRouteName.indexOf("propiedades") > 0) {
        activeTabRoute = "admin.propiedades";
      }
      var adminController = this.controllerFor("admin");
      adminController.set("activeTabRoute", activeTabRoute);
    }
  }
});
