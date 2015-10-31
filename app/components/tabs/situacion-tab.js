import Ember from 'ember';


export default Ember.Component.extend({
  // shared list of markers to all different map actors to share
  // allMapMarkers: [],
  actions: {
    stopConfirming: function(){
      this.set("isConfirming", false);
    },
    mapClicked: function(locationInfo) {
      var newAddress = {};
// TODO - parse locationInfo.clickedLocation.address_components..
      newAddress.direccionFisica = locationInfo.clickedLocation.formatted_address;
      newAddress.direccionPropiedad = locationInfo.clickedLocation.formatted_address;
      newAddress.mapaLat = locationInfo.clickedLocation.geometry.location.lat();
      newAddress.mapaLng = locationInfo.clickedLocation.geometry.location.lng();
      this.set("newAddress", newAddress);
      this.set("isConfirming", true);
    },
    updateFromSearch: function(searchResultObject) {
      var newAddress = {};
// TODO - parse searchResultObject.address_components..
      newAddress.direccionFisica = searchResultObject.formatted_address;
      newAddress.direccionPropiedad = searchResultObject.formatted_address;
      newAddress.mapaLat = searchResultObject.geometry.location.lat();
      newAddress.mapaLng = searchResultObject.geometry.location.lng();
      this.set("newAddress", newAddress);
      this.set("isConfirming", true);
      // var propertyResource = this.get("propertyResource");
      // propertyResource.mapaLat = searchResultObject.geometry.location.lat();
      // propertyResource.mapaLng = searchResultObject.geometry.location.lng();
      // propertyResource.direccionPropiedad = searchResultObject.vicinity;
      // propertyResource.save().catch(function(error) {
      //   debugger;
      //   var errorMessage = "Sorry, there has been an error.";
      //   if (error.responseJSON && error.responseJSON.errors) {
      //     errorMessage = error.responseJSON.errors[0];
      //   }
      //   // this.set('serverError', errorMessage);
      // }.bind(this));
    },
    updateConfirmedAddress: function(newAddressDetails) {
      var propertyResource = this.get("propertyResource");
      propertyResource.mapaLat = newAddressDetails.mapaLat;
      propertyResource.mapaLng = newAddressDetails.mapaLng;
      propertyResource.direccionPropiedad = newAddressDetails.direccionPropiedad;
      propertyResource.direccionFisica = newAddressDetails.direccionFisica;
      propertyResource.save().catch(function(error) {
        debugger;
        var errorMessage = "Sorry, there has been an error.";
        if (error.responseJSON && error.responseJSON.errors) {
          errorMessage = error.responseJSON.errors[0];
        }
        // this.set('serverError', errorMessage);
      }.bind(this));
      // .then(transitionToPost).catch(failure);
    }
  },
  situacionLeftInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.localidad",
      tooltipTextTKey: false,
      fieldName: "localidad",
      fieldType: "simpleInput",
      inputType: "text",
      constraints: {
        inputValue: {
          length: {
            minimum: 2,
            tooShort: "needs to have %{count} characters or more"
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.zona",
      tooltipTextTKey: false,
      fieldName: "zona",
      fieldType: "simpleInput",
      inputType: "text",
      constraints: {
        inputValue: {
          length: {
            minimum: 2,
            tooShort: "needs to have %{count} characters or more"
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.codigoPostal",
      tooltipTextTKey: false,
      fieldName: "codigoPostal",
      fieldType: "simpleInput",
      inputType: "text",
      constraints: {
        inputValue: {
          length: {
            minimum: 2,
            tooShort: "needs to have %{count} characters or more"
          }
        }
      }
    },
  ],
  situacionRightInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.direccion",
      tooltipTextTKey: false,
      fieldName: "direccion",
      fieldType: "simpleInput",
      inputType: "text",
      constraints: {
        inputValue: {
          length: {
            minimum: 2,
            tooShort: "needs to have %{count} characters or more"
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.direccionReal",
      tooltipTextTKey: false,
      fieldName: "direccionFisica",
      fieldType: "simpleInput",
      inputType: "text",
      constraints: {
        inputValue: {
          length: {
            minimum: 2,
            tooShort: "needs to have %{count} characters or more"
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.direccionMapa",
      tooltipTextTKey: false,
      fieldName: "direccionPropiedad",
      fieldType: "simpleInput",
      inputType: "text",
      constraints: {
        inputValue: {
          length: {
            minimum: 2,
            tooShort: "needs to have %{count} characters or more"
          }
        }
      }
    },
  ],

  geo: function() {
    var geo = Ember.Object.create({
      longitude: this.get("propertyResource.mapaLng"),
      latitude: this.get("propertyResource.mapaLat"),
      searchResults: "",
      map: "",
      allMapMarkers: null
    });

    return geo;
  }.property(),
  isActive: function() {
    return this.activeTabName.toLowerCase() === "situacion";
  }.property("activeTabName"),

});
