import Ember from 'ember';
import Scrapper from "../../models/scrapper";
import Property from "../../models/property";

export default Ember.Component.extend({
  // classNames: ['form-group', 'fg-float'],
  // optionsObject: function() {
  //   var defaultMls = this.get("availableMLSs")[0];
  //   this.set('websiteDetails', defaultMls);
  //   var optionsObject = Ember.Object.create({
  //     selected_option: defaultMls.value
  //   });
  //   return optionsObject;
  // }.property(),
  // optionsFieldKeys: function() {
  //   return this.get("availableMLSs");
  // }.property(),
  // optionsField: {
  //   fieldName: "selected_option",
  //   headerTextTKey: "fieldLabels.pickMlsPrompt",
  // },
  websiteDetails: {
    url: ""
  },
  actions: {
    getWebpageData: function() {
      var websiteDetails = this.get("websiteDetails");
      var constraints = {
        "url": {
          presence: {
            message: "Please enter a url."
          },
          url: {
            message: "Please enter a valid url."
          }
        }
      };

      var validationErrors = validate( websiteDetails, constraints, {
        fullMessages: false
      });
      if (validationErrors) {
        this.set("validationErrors", validationErrors.url);
        return;
      } else {
        this.set("validationErrors", []);
      }


      this.set("retrieving", true);
      // var propsRetrieved = this.get("propsRetrieved") || [];
      var that = this;
      Scrapper.getProperties(this.get("websiteDetails"),
        function(properties) {
          that.set("retrieving", false);
          // var prop = Property.create(properties);
          var propsRetrieved = that.get("propsRetrieved") || [];
          properties.forEach(function(property) {
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
});
