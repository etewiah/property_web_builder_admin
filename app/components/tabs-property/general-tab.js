import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],
  visibilityInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.visible",
      tooltipTextTKey: "toolTips.visible",
      fieldName: "visible",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.highlighted",
      tooltipTextTKey: "toolTips.highlighted",
      fieldName: "destacado",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.label",
      fieldName: "observacionesVenta",
      fieldType: "dynamicSelect",
      optionsKey: "property-labels",
    }
  ],
  portalesInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.yaencontre",
      tooltipTextTKey: "toolTips.yaencontre",
      fieldName: "yaencontre",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.pisoscom",
      tooltipTextTKey: "toolTips.pisoscom",
      fieldName: "pisoscom",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.idealista",
      tooltipTextTKey: "toolTips.idealista",
      fieldName: "idealista",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }


  ],
  characteristicasInputFields: [
    //this comment tricks prettify ;) 
    {

     // eficienciaEnergia is saved on server as string
     // commenting out till I decide on server side solution
    //   labelTextTKey: "fieldLabels.eficienciaEnergia",
    //   tooltipTextTKey: "toolTips.eficienciaEnergia",
    //   fieldName: "eficienciaEnergia",
    //   fieldType: "simpleSelect",
    //   fieldDbType: "boolean",
    // }, {
      labelTextTKey: "fieldLabels.anoConstr",
      tooltipTextTKey: false,
      fieldName: "anoConstr",
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
      labelTextTKey: "fieldLabels.numHabitaciones",
      tooltipTextTKey: false,
      fieldName: "numHabitaciones",
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
      labelTextTKey: "fieldLabels.numBanos",
      tooltipTextTKey: false,
      fieldName: "numBanos",
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
      labelTextTKey: "fieldLabels.numAseos",
      tooltipTextTKey: false,
      fieldName: "numAseos",
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
      labelTextTKey: "fieldLabels.mParcela",
      tooltipTextTKey: false,
      fieldName: "mParcela",
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
      labelTextTKey: "fieldLabels.mConstruidos",
      tooltipTextTKey: false,
      fieldName: "mConstruidos",
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
      labelTextTKey: "fieldLabels.garaje",
      tooltipTextTKey: "toolTips.garaje",
      fieldName: "numGarajes",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
      // options: [{
      //   value: 1,
      //   titleKey: "Si"
      // }, {
      //   value: 0,
      //   titleKey: "No"
      // }]
    },
  ],

  mainInputFields: [{
    labelTextTKey: "fieldLabels.ref",
    tooltipTextTKey: "toolTips.ref",
    fieldName: "ref",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
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
    savePropertyResource: function() {
      var propertyResource = this.get("resourceObject");
      var self = this;
      function success(result) {
        // triggerReset is an action in TabWithForm
        self.send("triggerReset");
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }
      propertyResource.save().then(success).catch(failure);
    }
  },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "general";
  }.property("activeTabName"),


});
