import Ember from 'ember';
// const { Route, inject } = Ember;

export default Ember.Route.extend({


  activate: function() {
    // Ember.$('body').toggleClass("admin")
    // not sure what the advantage of using Ember.$('body') is
    $('body').addClass('sw-toggled');
    $('#tw-switch').prop('checked', true);

    $('body').on('change', '#toggle-width input:checkbox', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('toggled sw-toggled');
        // localStorage.setItem('ma-layout-status', 1);
      } else {
        $('body').removeClass('toggled sw-toggled');
        // localStorage.setItem('ma-layout-status', 0);
      }
    });

  },
  // deactivate: function() {
  //   debugger;
  //   Ember.$('body').toggleClass("admin");
  // },

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
