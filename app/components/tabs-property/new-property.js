import Ember from 'ember';

import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],

  // propertyResource: {},
  actions: {
    createPropertyResource: function() {
      var propertyResource = this.get("resourceObject");

      var self = this;

      function transitionToPost(propertyResource) {
        self.get('router').transitionTo('admin.propiedades.editar', propertyResource.id);
        // self.transitionToRoute('admin.propiedades.editar', propertyResource.id);
      }

      function failure(reason) {
        debugger;
        // handle the error
      }
      propertyResource.save().then(transitionToPost).catch(failure);


    }
  },
  characteristicasInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.yearConstruction",
      tooltipTextTKey: false,
      fieldName: "yearConstruction",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThan: 2016,
            greaterThan: 1500,
            message: "Invalid date",
          },
        }
      }
    }, {
      labelTextTKey: "fieldLabels.countBedrooms",
      tooltipTextTKey: false,
      fieldName: "countBedrooms",
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
      labelTextTKey: "fieldLabels.countBathrooms",
      tooltipTextTKey: false,
      fieldName: "countBathrooms",
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
    // }, {
    //   labelTextTKey: "fieldLabels.numAseos",
    //   tooltipTextTKey: false,
    //   fieldName: "numAseos",
    //   fieldType: "simpleInput",
    //   inputType: "number",
    //   constraints: {
    //     inputValue: {
    //       numericality: {
    //         onlyInteger: true,
    //         lessThanOrEqualTo: 3000,
    //       }
    //     }
    //   }
    }, {
      labelTextTKey: "fieldLabels.plotArea",
      tooltipTextTKey: false,
      fieldName: "plotArea",
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
      labelTextTKey: "fieldLabels.constructedArea",
      tooltipTextTKey: false,
      fieldName: "constructedArea",
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
    }, 
  ],

  inputFields: [{
    labelTextTKey: "fieldLabels.ref",
    tooltipTextTKey: "toolTips.ref",
    fieldName: "reference",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
      }
    }
  }, 
  // {
  //   labelTextTKey: "fieldLabels.precioVenta",
  //   tooltipTextTKey: "toolTips.precioVenta",
  //   fieldName: "precioVenta",
  //   fieldType: "simpleInput",
  //   inputType: "number",
  //   constraints: {
  //     inputValue: {
  //       numericality: {
  //         onlyInteger: true,
  //         lessThanOrEqualTo: 3000,
  //       }
  //     }
  //   }
  // }, {
  //   labelTextTKey: "fieldLabels.precioAntiguo",
  //   tooltipTextTKey: "toolTips.precioAntiguo",
  //   fieldName: "precioAntiguo",
  //   fieldType: "simpleInput",
  //   inputType: "number",
  //   constraints: {
  //     inputValue: {
  //       numericality: {
  //         onlyInteger: true,
  //         lessThanOrEqualTo: 3000,
  //       }
  //     }
  //   }
  // }, {
  //   labelTextTKey: "fieldLabels.precioAlquiler",
  //   tooltipTextTKey: "toolTips.precioAlquiler",
  //   fieldName: "precioAlquiler",
  //   fieldType: "simpleInput",
  //   inputType: "number",
  //   constraints: {
  //     inputValue: {
  //       numericality: {
  //         onlyInteger: true,
  //         lessThanOrEqualTo: 3000,
  //       }
  //     }
  //   }
  // }, 
  {
    labelTextTKey: "fieldLabels.tipo",
    tooltipTextTKey: "",
    fieldName: "propertyTypeKey",
    fieldType: "dynamicSelect",
    optionsKey: "property-types",
  }, {
    labelTextTKey: "fieldLabels.estado",
    tooltipTextTKey: "",
    fieldName: "propertyStateKey",
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


});
