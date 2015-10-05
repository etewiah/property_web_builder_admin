import Ember from 'ember';


export default Ember.Component.extend({
  characteristicasInputFields: [
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
      fieldType: "simpleInput"
    }, {
      labelTextTKey: "fieldLabels.precioTm",
      tooltipTextTKey: false,
      fieldName: "precioTm",
      fieldType: "simpleInput"
    }, {
      labelTextTKey: "fieldLabels.precioTb",
      tooltipTextTKey: false,
      fieldName: "precioTb",
      fieldType: "simpleInput"
    }
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
      fieldType: "simpleInput"
    }, {
      labelTextTKey: "fieldLabels.precioTm",
      tooltipTextTKey: false,
      fieldName: "precioTm",
      fieldType: "simpleInput"
    }, {
      labelTextTKey: "fieldLabels.precioTb",
      tooltipTextTKey: false,
      fieldName: "precioTb",
      fieldType: "simpleInput"
    }
  ],
  inputFields: [
    // {
    //   labelTextTKey: "Precio Venta",
    //   tooltipTextTKey: "Precio de venta.",
    //   fieldName: "precioVenta",
    //   fieldType: "simpleInput"
    // }, 
    {
      labelTextTKey: "fieldLabels.precioAntiguo",
      tooltipTextTKey: "toolTips.precioAntiguo",
      fieldName: "precioAntiguo",
      fieldType: "simpleInput"
    }, {
      labelTextTKey: "fieldLabels.precioAlquiler",
      tooltipTextTKey: "toolTips.precioAlquiler",
      fieldName: "precioAlquiler",
      fieldType: "simpleInput"
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
    },
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
