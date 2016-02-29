import Ember from 'ember';
import AdminMeta from '../../../../models/admin_meta';
// var inject = Ember.inject;

export default Ember.Route.extend({
  // configFetcher: inject.service(),
  i18n: Ember.inject.service(),
  actions: {
    // https://guides.emberjs.com/v1.10.0/routing/preventing-and-retrying-transitions/
    willTransition: function(transition) {
        // var property = this.controller.get("property");
        var changedFields = this.controller.get("changedFields");
        var i18n = this.get('i18n');

        // if (property.get("hasDirtyAttributes")) {
        // using above was too flakey - sometimes a null input field would change to "" when you type and delete..
        if(changedFields.length > 0){
          var message = i18n.t("alerts.navigatingFromChanges").toString();
          sweetAlert(message);
          transition.abort();
        } else {
          // Bubble the `willTransition` action so that
          // parent routes can decide whether or not to abort.
          return true;
        }
      }
      // had been hoping to be able to refresh data when user decides to cancel edit
      // did not work but rollbackAttributes on model does the trick
      // refetchData() {
      //   var refreshedData = this.store.findRecord('property', 1, { reload: true });
      //   refreshedData.then(function(res){
      //     this.controller.set("property", res);
      //   }.bind(this),function(err){
      //     // todo 
      //   });
      //   // this.controller.set("property", refreshedData);
      // }
  },
  model(params) {
    // Model returned here is a set of localised key value pairs
    // that can be used to populate "dynamic-select" input fields
    var fieldNames = "";
    if (params.tabName === "general") {
      fieldNames = "property-origins, property-types, property-states, property-labels";
    }
    if (params.tabName === "situacion") {
      fieldNames = "provinces";
    }
    if (params.tabName === "extras") {
      fieldNames = "extras";
    }
    if (params.tabName === "owner") {
      fieldNames = "clients";
    }


    if (Ember.isEmpty(fieldNames)) {
      return {};
    } else {
      var adminMeta = AdminMeta.get(fieldNames);
      // adminMeta is from http://localhost:3000/api/v1/lang/field_keys/
      // and just returns a list of selectValues for provinces and propertyTypes..
      return adminMeta;
    }
  },
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.propiedades.editar.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);
    controller.set("property", this.modelFor('admin.propiedades.editar'));


    var supportedLanguages = this.modelFor("admin").tenantDetails.supported_languages || ["es"];
    controller.set("supportedLanguages", supportedLanguages);
    // controller.set("extrasObject", model);
    // var adminController = this.controllerFor("admin");
    controller.set("fieldKeys", model);

    controller.set("changedFields", []);
    // below doesn't quite work - not sure how to ensure promise is resolved before assigning it
    // var fieldKeys = this.get("configFetcher").getFieldKeys("").then(function(result){
    //   controller.set("fieldKeys", result);
    // }.bind(this));

    // before I would render all the components for the different tabs
    // and hide or show them depending on which was active
    // This meant initialization hooks which needed a dom element would fail
    // var tabsPropertyComponent = "tabs-property/" + activeTabName + "-tab";
    var tabsPropertyComponent = "tabs-property/general-tab";
    if (activeTabName === "fotos") {
      tabsPropertyComponent = "tabs-property/fotos-tab";
    }
    if (activeTabName === "situacion") {
      tabsPropertyComponent = "tabs-property/location-tab";
    }
    controller.set("tabs-property-component", tabsPropertyComponent);

    controller.set("tabsList", [{
        tabValue: "general",
        tabTitleKey: "propertySections.general"
      }, {
        tabValue: "venta",
        tabTitleKey: "propertySections.sale"
      }, {
        tabValue: "situacion",
        tabTitleKey: "propertySections.location"
      }, {
      //   tabValue: "descripcion",
      //   tabTitleKey: "propertySections.description"
      // }, {
        tabValue: "extras",
        tabTitleKey: "propertySections.extras"
      }, {
        tabValue: "fotos",
        tabTitleKey: "propertySections.photos"
      },
      // {
      //   tabValue: "owner",
      //   tabTitleKey: "propertySections.owner"
      // }
    ]);
  }
});
