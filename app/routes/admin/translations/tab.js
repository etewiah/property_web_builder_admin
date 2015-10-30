import Ember from 'ember';
import AdminTranslations from '../../../models/admin_translations';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },
  model(params) {
    var adminTranslations = AdminTranslations.get(params.tabName);
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
