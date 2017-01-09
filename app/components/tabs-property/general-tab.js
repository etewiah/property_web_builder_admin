import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  languages: function() {
    var supportedLanguages = this.get("supportedLanguages");
    var languages = [];
    supportedLanguages.forEach(function(language) {
      var titleFieldName = "title" + language.capitalize();
      var descriptionFieldName = "description" + language.capitalize();
      languages.push({
        languageKey: language,
        titleLabelKey: "fieldLabels.title",
        descriptionLabelKey: "fieldLabels.description",
        titleFieldName: titleFieldName,
        descriptionFieldName: descriptionFieldName,
      });
    });
    return languages;
  }.property(),
  // changedFields: [],
  currencyField: {
    labelTextTKey: "fieldLabels.currency",
    fieldName: "currency",
  },
  currencyFieldKeys: [{
    value: "EUR",
    label: "Euros",
  }, {
    value: "GBP",
    label: "UK Pounds",
  }, {
    value: "USD",
    label: "Dollars",
  }],
  visibilityInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.visible",
      tooltipTextTKey: "toolTips.visible",
      fieldName: "visible",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    // }, {
    //   labelTextTKey: "fieldLabels.highlighted",
    //   tooltipTextTKey: "toolTips.highlighted",
    //   fieldName: "highlighted",
    //   fieldType: "simpleSelect",
    //   fieldDbType: "boolean",
    // }, {
    //   labelTextTKey: "fieldLabels.label",
    //   fieldName: "observacionesVenta",
    //   fieldType: "dynamicSelect",
    //   optionsKey: "property-labels",
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
      labelTextTKey: "fieldLabels.countBedrooms",
      tooltipTextTKey: false,
      fieldName: "countBedrooms",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 99,
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
            lessThanOrEqualTo: 99,
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
    //         lessThanOrEqualTo: 99,
    //       }
    //     }
    //   }
    }, {
      labelTextTKey: "fieldLabels.garaje",
      // tooltipTextTKey: "toolTips.garaje",
      fieldName: "countGarages",
      // fieldType: "simpleSelect",
      // fieldDbType: "boolean",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 99,
          }
        }
      }
    },
  ],

  characteristicasInputFields2: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.plotArea",
      tooltipTextTKey: false,
      fieldName: "plotArea",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 1000000,
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
            lessThanOrEqualTo: 1000000,
          }
        }
      }
    }, {

      // eficienciaEnergia is saved on server as string
      // commenting out till I decide on server side solution
      //   labelTextTKey: "fieldLabels.eficienciaEnergia",
      //   tooltipTextTKey: "toolTips.eficienciaEnergia",
      //   fieldName: "eficienciaEnergia",
      //   fieldType: "simpleSelect",
      //   fieldDbType: "boolean",
      // }, {
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
    },
  ],
  mainInputFields: [{
    labelTextTKey: "fieldLabels.ref",
    tooltipTextTKey: "toolTips.ref",
    fieldName: "reference",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {}
    }
  }, {
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
  // actions: {
  // - was only used by property text editing
  // - other prop edits go through tab-with-form
  //   savePropertyResource: function() {
  //     var propertyResource = this.get("resourceObject");
  //     var self = this;
  //     function success(result) {
  //       // triggerReset is an action in TabWithForm
  //       self.send("triggerReset");
  //     }

  //     function failure(reason) {
  //       // handle the error
  //     }
  //     propertyResource.save().then(success).catch(failure);
  //   }
  // },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "general";
  }.property("activeTabName"),


});
