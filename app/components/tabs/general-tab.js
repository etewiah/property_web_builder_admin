import Ember from 'ember';


export default Ember.Component.extend({
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
      options: [{value: 0, titleKey: "Private"}, {value: 1, titleKey: "Builder"}, {value: 2, titleKey: "Bank"}]
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
