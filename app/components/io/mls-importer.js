import Ember from 'ember';
import MlsConnector from "../../models/mls-connector";
import Property from "../../models/property";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // classNames: ['form-group', 'fg-float'],
  // mlsDetails: {
  // },
  optionsObject: function() {
    var defaultMls = this.get("availableMLSs")[0];
    this.set('mlsDetails', defaultMls.details);
    var optionsObject = Ember.Object.create({
      selected_option: defaultMls.value
    });
    // debugger;
    return optionsObject;
  }.property(),
  optionsFieldKeys: function() {
    return this.get("availableMLSs");
  }.property(),
  optionsField: {
    fieldName: "selected_option",
    headerTextTKey: "fieldLabels.propCsvUploadPrompt",
  },
  // optionsFieldKeys: [{
  //   value: "PWB",
  //   labelTextTKey: "fieldLabels.pwbCsvFile",
  // }, {
  //   value: "MLS",
  //   labelTextTKey: "fieldLabels.mlsCsvFile",
  // }],
  actions: {
    mlsSelectionChanged: function() {
      var mlsSelectionValue = this.get('optionsObject.selected_option');
      var availableMLSs = this.get("availableMLSs");
      var mlsSelectionObject = availableMLSs.findBy("value", mlsSelectionValue);
      // debugger;
      this.set("mlsDetails", mlsSelectionObject.details);
    },
    getMlsData: function() {
      // var propsRetrieved = this.get("propsRetrieved") || [];
      var that = this;
      var mlsProp = MlsConnector.getProperties(this.get("mlsDetails"),
        function(properties) {
          // var prop = Property.create(properties);
          var store = that.get("store");
          var propsRetrieved = that.get("propsRetrieved") || [];
          properties.forEach(function(property) {
            var prop = store.createRecord("property", property);
            propsRetrieved.addObject(prop);
          })
          that.set("propsRetrieved", propsRetrieved);
        },
        function(error) {
          that.set("hasError", true);
        });
    },
    ackError: function() {
      this.set("hasError", false);
    }
  },
  // propsToImport: Ember.computed('propsRetrieved', {
  //   get(key) {
  //     return this.get("propsRetrieved") || [];
  //   },
  //   // set(key, value) {
  //   //   this.set("propsRetrieved", value);
  //   //   return value;
  //   // }
  // }),
});