import Ember from 'ember';


export default Ember.Component.extend({
  alquilerDeTemporadaInputFields: [{
    labelText: "Temporadas:",
    tooltipText: "Si el inmueble se alquila por temporadas",
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
    labelText: "Precio Temp. Alta",
    tooltipText: false,
    fieldName: "precioTa",
    fieldType: "simpleInput"
  }, {
    labelText: "Precio Temp. Media",
    tooltipText: false,
    fieldName: "precioTm",
    fieldType: "simpleInput"
  }, {
    labelText: "Precio Temp. Baja",
    tooltipText: false,
    fieldName: "precioTb",
    fieldType: "simpleInput"
  }, ],
  inputFields: [
    // {
    //   labelText: "Precio Venta",
    //   tooltipText: "Precio de venta.",
    //   fieldName: "precioVenta",
    //   fieldType: "simpleInput"
    // }, 
    {
      labelText: "Precio Anterior",
      tooltipText: "El precio antes de la rebaja",
      fieldName: "precioAntiguo",
      fieldType: "simpleInput"
    }, {
      labelText: "Precio Alquiler",
      tooltipText: "0 si el inmueble sólo es para venta.",
      fieldName: "precioAlquiler",
      fieldType: "simpleInput"
    }, {
      labelText: "Tipo:",
      tooltipText: "",
      fieldName: "precioAlquiler",
      fieldType: "simpleSelect",
      options: ["Apartamento", "Villa"]
    }, {
      labelText: "Origen:",
      tooltipText: "",
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
