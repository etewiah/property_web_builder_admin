import Ember from 'ember';
import AdminTranslations from '../../../../models/admin_translations';

export default Ember.Route.extend({
  // tabsList: [{}],
 actions: {
    willTransition: function(transition) {
      // debugger;
    }
  },
  model(params) {
    var adminTranslations = AdminTranslations.get(params.tabName);
    return adminTranslations;
  },

  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.propiedades.settings.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());

    controller.set("adminTranslations", model);

    var websiteDetails = this.modelFor("admin").websiteDetails;
    controller.set("locales", websiteDetails.sl_without_variants);


    controller.set("tabsList", [{
      tabValue: "extras",
      tabTitleKey: "translationsSections.extras"
    }, {
      tabValue: "property-types",
      tabTitleKey: "translationsSections.propertyTypes"
    // }, {
    //   tabValue: "property-origins",
    //   tabTitleKey: "translationsSections.propertyOrigins"
    }, {
      tabValue: "property-states",
      tabTitleKey: "translationsSections.propertyStates"
    },{
      tabValue: "property-labels",
      tabTitleKey: "translationsSections.propertyLabels"
    }
    // ,{
    //   tabValue: "provinces",
    //   tabTitleKey: "translationsSections.provinces"
    // }
    ]);
  }
});
