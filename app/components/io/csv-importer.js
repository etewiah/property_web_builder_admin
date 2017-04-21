import Ember from 'ember';
// import MlsConnector from "../../models/mls-connector";
// import Property from "../../models/property";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  url: function() {
    var selectedOption = this.get("optionsObject.selected_option");
    if (selectedOption === "MLS") {
      return "/import/properties/retrieve_from_mls";
    } else {
      return "/import/properties/retrieve_from_pwb";
    }
    // var activeTabObject = this.get("activeTabObject");
    // return activeTabObject.importUrl;
  }.property('optionsObject.selected_option'),
  optionsObject: function() {
    var optionsObject = Ember.Object.create({
      selected_option: "PWB"
    });
    return optionsObject;
  }.property(),
  optionsField: {
    fieldName: "selected_option",
    headerTextTKey: "fieldLabels.propCsvUploadPrompt",
  },
  optionsFieldKeys: [{
    value: "PWB",
    labelTextTKey: "fieldLabels.pwbCsvFile",
  }, {
    value: "MLS",
    labelTextTKey: "fieldLabels.mlsCsvFile",
  }],

  actions: {
    processParsedProps: function(result) {
      var properties = result.retrieved_items;
      // JSON.parse(result.retrieved_items);
      var store = this.get("store");
      var propsRetrieved = this.get("propsRetrieved") || [];
      properties.forEach(function(property) {
        // var prop = store.createRecord("property", property);
        // propsRetrieved.addObject(prop);
        propsRetrieved.addObject(property);
      })
      this.set("propsRetrieved", propsRetrieved);
    }
  },

});
