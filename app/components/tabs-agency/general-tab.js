import Ember from 'ember';


export default Ember.Component.extend({

  mainInputFields: [{
    labelTextTKey: "fieldLabels.companyName",
    // tooltipTextTKey: "toolTips.company_name",
    fieldName: "company_name",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        numericality: {
          onlyInteger: true,
          lessThanOrEqualTo: 3000,
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
  actions: {
    saveAgencyDetails: function() {
      var agencyDetails = this.get("agencyDetails");
      // var self = this;
      // function failure(reason) {
      // }
      agencyDetails.save();
      // .then().catch(failure);
    }
  },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "general";
  }.property("activeTabName"),


});
