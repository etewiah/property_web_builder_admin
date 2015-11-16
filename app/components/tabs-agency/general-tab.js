import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({

  actions: {
    saveAgencyDetails: function() {
      var agencyDetails = this.get("agencyDetails");
      agencyDetails.save(function(success) {
        // triggerReset is an action in TabWithForm
        this.send("triggerReset");
      }.bind(this), function(error) {
        // debugger;
        // var errorMessage = "Sorry, there has been an error.";
        // if (error.responseJSON && error.responseJSON.errors) {
        //   errorMessage = error.responseJSON.errors[0];
        // }
        // this.set('serverError', errorMessage);
      }.bind(this));
    }

  },
  mainInputFields: [{
    labelTextTKey: "fieldLabels.companyName",
    // tooltipTextTKey: "toolTips.company_name",
    fieldName: "company_name",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.precioVenta",
    tooltipTextTKey: "toolTips.precioVenta",
    fieldName: "precioVenta",
    fieldType: "simpleInput",
    inputType: "number",
    constraints: {
      inputValue: {
        numericality: {
          onlyInteger: true,
          lessThanOrEqualTo: 3000,
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.precioAntiguo",
    tooltipTextTKey: "toolTips.precioAntiguo",
    fieldName: "precioAntiguo",
    fieldType: "simpleInput",
    inputType: "number",
    constraints: {
      inputValue: {
        numericality: {
          onlyInteger: true,
          lessThanOrEqualTo: 3000,
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.precioAlquiler",
    tooltipTextTKey: "toolTips.precioAlquiler",
    fieldName: "precioAlquiler",
    fieldType: "simpleInput",
    inputType: "number",
    constraints: {
      inputValue: {
        numericality: {
          onlyInteger: true,
          lessThanOrEqualTo: 3000,
        }
      }
    }
  }],
  isActive: function() {
    return this.activeTabName.toLowerCase() === "general";
  }.property("activeTabName"),


});
