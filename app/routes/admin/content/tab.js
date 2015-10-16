import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    // GET to /persons?filter[name]=Peter
    // this.store.query('person', {
    //   filter: {
    //     name: 'Peter'
    //   }
    // }).then(function(peters) {
    //   // Do something with `peters`
    // });
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
    var activeTabName = this.paramsFor('admin.content.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    // controller.set("contentResources", this.modelFor('admin.content'));
    controller.set("contentResources", model);


    // controller.set("extrasObject", model);
    // var adminController = this.controllerFor("admin");
    // controller.set("fieldKeys", adminController.fieldKeys);

    controller.set("tabsList", [{
      tabValue: "home",
      tabTitleKey: "webContentSections.home"
    }, {
      tabValue: "tag-line",
      tabTitleKey: "webContentSections.tagLine"
    }, {
      tabValue: "sell",
      tabTitleKey: "webContentSections.sell"
    }, {
      tabValue: "about-us",
      tabTitleKey: "webContentSections.aboutUs"
    }]);
  }
});
