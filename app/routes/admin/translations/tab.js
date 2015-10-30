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
    var adminTranslations = AdminMeta.getAdminTranslations(params.tabName);
    return adminTranslations;
  },

  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.translations.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());

    controller.set("adminTranslations", model);

    controller.set("tabsList", [{
      tabValue: "extras",
      tabTitleKey: "translationsSections.extras"
    }, {
      tabValue: "property-types",
      tabTitleKey: "translationsSections.propertyTypes"
    }, {
      tabValue: "sell",
      tabTitleKey: "translationsSections.extras"
    }, {
      tabValue: "about-us",
      tabTitleKey: "translationsSections.extras"
    }]);
  }
});
