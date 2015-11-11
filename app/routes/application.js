import Ember from 'ember';
// const { Route, inject } = Ember;

export default Ember.Route.extend({
  // translationsFetcher: inject.service(),

  // beforeModel: function() {
  //   return this.get('translationsFetcher').fetch();
  // },
  actions: {
    setActiveLeftNav: function() {
      var applicationController = this.controllerFor("application");
      var currentRouteName = applicationController.currentRouteName;
      if (currentRouteName === "index") {
        return;
      }
      // var activeTabRoute = "admin.inicio";
      var activeTabRoute = "admin.setup";
      // TODO - improve this logic a bit...
      if (currentRouteName.indexOf("propiedades") > 0) {
        activeTabRoute = "admin.propiedades";
      }
      if (currentRouteName.indexOf("content") > 0) {
        activeTabRoute = "admin.content";
      }
      var adminController = this.controllerFor("admin");
      adminController.set("activeTabRoute", activeTabRoute);
    }
  }
});
