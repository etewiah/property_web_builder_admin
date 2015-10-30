import Ember from 'ember';
import AdminMeta from '../../../models/admin_meta';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    var propertyTypes = AdminMeta.getPropertyTypes();
    return propertyTypes;
  },

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
