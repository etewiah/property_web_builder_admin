import Ember from 'ember';
import MlsConnector from "../../../../models/mls-connector";

export default Ember.Route.extend({
  actions: {
  },

  model(params) {
    // setupController will not get called if model does not change
    return MlsConnector.getAll();
  },


  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.io.properties.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);
    
    var importPropsComponent = "io/csv-importer";
    if (activeTabName.includes("mls")) {
      importPropsComponent = "io/mls-importer";
    }
    controller.set("importerComponent", importPropsComponent);

    var importPropertiesTabsList = this.modelFor("admin").setup.get('importPropertiesTabsList');
    controller.set("tabsList",importPropertiesTabsList);
    var activeTabObject = importPropertiesTabsList.findBy("tabValue",activeTabName) || importPropertiesTabsList[0];
    controller.set("activeTabObject", activeTabObject);

  }


});
