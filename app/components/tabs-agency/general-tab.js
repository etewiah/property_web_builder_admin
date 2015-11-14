import Ember from 'ember';


export default Ember.Component.extend({

  mainInputFields: [{
    labelTextTKey: "fieldLabels.ref",
    tooltipTextTKey: "toolTips.ref",
    fieldName: "ref",
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
  }, {
    labelTextTKey: "fieldLabels.tipo",
    tooltipTextTKey: "",
    fieldName: "tipoPropiedad",
    fieldType: "dynamicSelect",
    optionsKey: "property-types",
  }, {
    labelTextTKey: "fieldLabels.estado",
    tooltipTextTKey: "",
    fieldName: "estadoPropiedad",
    fieldType: "dynamicSelect",
    optionsKey: "property-states",
  }, {
    labelTextTKey: "fieldLabels.origen",
    tooltipTextTKey: "",
    fieldName: "origenPropiedad",
    fieldType: "dynamicSelect",
    optionsKey: "property-origins"
      // options: [{
      //   value: 0,
      //   titleKey: "Private"
      // }, {
      //   value: 1,
      //   titleKey: "Builder"
      // }, {
      //   value: 2,
      //   titleKey: "Bank"
      // }]
  }],
  actions: {
    saveAgencyDetails: function() {
      var propertyResource = this.get("propertyResource");
      var self = this;
debugger;
      function transitionToPost(propertyResource) {
        // debugger;
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }
      propertyResource.save().then(transitionToPost).catch(failure);
    }
  },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "general";
  }.property("activeTabName"),


});
