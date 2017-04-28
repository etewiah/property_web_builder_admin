import Ember from 'ember';
import MlsConnector from "../../models/mls-connector";
import Property from "../../models/property";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // classNames: ['form-group', 'fg-float'],
  // updateValue: Ember.observer('mlsDetails', function() {
  // }),
  validateInput: function() {
    var mlsDetails = this.get("mlsDetails");
    var constraints = {
      "mlsDetails.login_url": {
        presence: {
          message: "Please fill in all fields"
        }
      },
      "mlsDetails.username": {
        presence: {
          message: "Please fill in all fields"
        }
      },
      "mlsDetails.password": {
        presence: {
          message: "Please fill in all fields"
        }
      }
    };

    var validationErrors = validate({ mlsDetails: mlsDetails }, constraints, {
      fullMessages: false
    });
    return validationErrors;
    // debugger;
    // if (validationErrors) {
    //   this.set("validationErrors", validationErrors.mlsDetails);
    // } else {
    //   this.set("validationErrors", []);
    // }

  },
  optionsObject: function() {
    var defaultMls = this.get("availableMLSs")[0];
    this.set('mlsDetails', defaultMls);
    var optionsObject = Ember.Object.create({
      selected_option: defaultMls.value
    });
    return optionsObject;
  }.property(),
  optionsFieldKeys: function() {
    return this.get("availableMLSs");
  }.property(),
  optionsField: {
    fieldName: "selected_option",
    headerTextTKey: "fieldLabels.pickMlsPrompt",
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
      this.set("mlsDetails", mlsSelectionObject);
    },
    getMlsData: function() {
      var validationErrors = this.validateInput();
      // debugger;
      if (validationErrors) {
        this.set("validationErrors", ["Please fill in all fields"]);
        return;
      }
      else{
        this.set("validationErrors", []);
      }
      this.set("retrieving", true);
      // var propsRetrieved = this.get("propsRetrieved") || [];
      var that = this;
      MlsConnector.getProperties(this.get("mlsDetails"),
        function(properties) {
          that.set("retrieving", false);
          // var prop = Property.create(properties);
          var store = that.get("store");
          var propsRetrieved = that.get("propsRetrieved") || [];
          properties.forEach(function(property) {
            // var prop = store.createRecord("property", property);
            propsRetrieved.addObject(property);
          })
          that.set("propsRetrieved", propsRetrieved);
        },
        function(error) {
          that.set("hasError", true);
          that.set("retrieving", false);
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
