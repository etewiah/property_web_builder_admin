import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  i18n: Ember.inject.service(),
  actions: {
    startDeleteProp: function() {
      var i18n = this.get('i18n');
      var message = i18n.t("alerts.deletingProperty").toString();
      this.confirmDeleteProp(message);
    }
  },

  confirmDeleteProp: function(message) {
    sweetAlert({
      title: "",
      text: message,
      // type: "input",
      showCancelButton: true,
      confirmButtonColor: "#337ab7",
      closeOnConfirm: true,
      animation: "slide-from-top",
      // inputPlaceholder: "Your name"
    }, function(inputValue) {
      var propertyResource = this.get("resourceObject");
      var self = this;

      function success(result) {
        self.get('router').transitionTo("admin.propiedades.list.default");
      }

      function failure(reason) {
        // handle the error
      }
      // swal is an alias for sweetAlert
      swal.close();
      propertyResource.destroyRecord().then(success).catch(failure);
    }.bind(this));
  },

  areaUnitField: {
    headerTextTKey: "fieldLabels.areaUnit",
    fieldName: "areaUnit",
  },
  areaUnitFieldKeys: [{
    value: "sqmt",
    labelTextTKey: "sqmt",
  }, {
    value: "sqft",
    labelTextTKey: "sqft",
  }],

  currencyField: {
    headerTextTKey: "fieldLabels.currency",
    fieldName: "currency",
  },
  currencyFieldKeys: function() {
    var clientSetup = this.get("clientSetup");
    debugger;
    return clientSetup.currencyFieldKeys;
  }.property("clientSetup"),

  // currencyFieldKeys: [{
  //   value: "EUR",
  //   labelTextTKey: "eur",
  // }, {
  //   value: "GBP",
  //   labelTextTKey: "gbp",
  // }, {
  //   value: "USD",
  //   labelTextTKey: "usd",
  // }],
  //   currencyFieldKeys: [{
  //   value: "EUR",
  //   label: "Euros",
  // }, {
  //   value: "GBP",
  //   label: "UK Pounds",
  // }, {
  //   value: "USD",
  //   label: "Dollars",
  // }],
  visibilityInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.visibleOnWeb",
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
            greaterThan: 0,
            lessThanOrEqualTo: 999,
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
            greaterThan: 0,
            lessThanOrEqualTo: 999,
          }
        }
      }
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
            greaterThan: 0,
            lessThanOrEqualTo: 999,
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
    }
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
            greaterThan: 0,
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
            greaterThan: 0,
            lessThanOrEqualTo: 1000000,
          }
        }
      }
    }
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
    fieldName: "propTypeKey",
    fieldType: "dynamicSelect",
    optionsKey: "property-types",
  }, {
    labelTextTKey: "fieldLabels.estado",
    tooltipTextTKey: "",
    fieldName: "propStateKey",
    fieldType: "dynamicSelect",
    optionsKey: "property-states",
    // }, {
    //   labelTextTKey: "fieldLabels.origen",
    //   tooltipTextTKey: "",
    //   fieldName: "origenPropiedad",
    //   fieldType: "dynamicSelect",
    //   optionsKey: "property-origins"
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
