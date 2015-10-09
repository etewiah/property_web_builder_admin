import Ember from 'ember';


export default Ember.Component.extend({
  characteristicasInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.eficienciaEnergia",
      tooltipTextTKey: "toolTips.eficienciaEnergia",
      fieldName: "eficienciaEnergia",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
      options: [{
        value: 1,
        titleKey: "Si"
      }, {
        value: 0,
        titleKey: "No"
      }]
    }, {
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
      options: [{
        value: 1,
        titleKey: "Si"
      }, {
        value: 0,
        titleKey: "No"
      }]
    },
  ],

  alquilerDeTemporadaInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.temporadas",
      tooltipTextTKey: "toolTips.temporadas",
      fieldName: "temporadas",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
      options: [{
        value: 1,
        titleKey: "Si"
      }, {
        value: 0,
        titleKey: "No"
      }]
    }, {
      labelTextTKey: "fieldLabels.precioTa",
      tooltipTextTKey: false,
      fieldName: "precioTa",
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
      labelTextTKey: "fieldLabels.precioTm",
      tooltipTextTKey: false,
      fieldName: "precioTm",
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
      labelTextTKey: "fieldLabels.precioTb",
      tooltipTextTKey: false,
      fieldName: "precioTb",
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
    }
  ],
  inputFields: [{
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
    },
    // {
    //   labelTextTKey: "Tipo:",
    //   tooltipTextTKey: "",
    //   fieldName: "precioAlquiler",
    //   fieldType: "simpleSelect",
    //   options: ["Apartamento", "Villa"]
    // }, 
    {
      labelTextTKey: "fieldLabels.origen",
      tooltipTextTKey: "",
      fieldName: "idOrigenPropiedad",
      fieldType: "simpleSelect",
      options: [{
        value: 0,
        titleKey: "Private"
      }, {
        value: 1,
        titleKey: "Builder"
      }, {
        value: 2,
        titleKey: "Bank"
      }]
    }, {
      labelTextTKey: "fieldLabels.tipo",
      tooltipTextTKey: "",
      fieldName: "....",
      fieldType: "simpleSelect",
      optionsKey: "propertyTypesSelectValues",
      options: [{
        value: 0,
        titleKey: "Private"
      }, {
        value: 1,
        titleKey: "Builder"
      }, {
        value: 2,
        titleKey: "Bank"
      }]
    }
  ],
  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("propertyResource");

      var self = this;

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
