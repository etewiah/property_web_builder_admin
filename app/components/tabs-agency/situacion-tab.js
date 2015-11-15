import Ember from 'ember';


export default Ember.Component.extend({
  // shared list of markers to all different map actors to share
  // allMapMarkers: [],
  actions: {
    saveAddressDetails: function() {
      var addressDetails = this.get("addressDetails");
      debugger;
      addressDetails.save();

      function transitionToPost(addressDetails) {
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }
      // addressDetails.save().then(transitionToPost).catch(failure);
    },
    stopConfirming: function() {
      this.set("isConfirming", false);
    },
    mapClicked: function(locationInfo) {
      var newAddress = {};
      // TODO - parse locationInfo.clickedLocation.address_components..
      newAddress.street_address = locationInfo.clickedLocation.formatted_address;
      // newAddress.direccionPropiedad = locationInfo.clickedLocation.formatted_address;
      newAddress.latitude = locationInfo.clickedLocation.geometry.location.lat();
      newAddress.longitude = locationInfo.clickedLocation.geometry.location.lng();
      this.set("newAddress", newAddress);
      this.set("isConfirming", true);
    },
    updateFromSearch: function(searchResultObject) {
      var newAddress = {};
      // TODO - parse searchResultObject.address_components..
      newAddress.street_address = searchResultObject.formatted_address;
      // newAddress.direccionPropiedad = searchResultObject.formatted_address;
      newAddress.latitude = searchResultObject.geometry.location.lat();
      newAddress.longitude = searchResultObject.geometry.location.lng();
      this.set("newAddress", newAddress);
      this.set("isConfirming", true);
    },

    // result of clicking on map and confirming address derails from there
    updateConfirmedAddress: function(newAddressDetails) {
      var addressDetails = this.get("addressDetails");
      addressDetails.latitude = newAddressDetails.latitude;
      addressDetails.longitude = newAddressDetails.longitude;
      // addressDetails.direccionPropiedad = newAddressDetails.direccionPropiedad;
      addressDetails.street_address = newAddressDetails.street_address;
      addressDetails.save(function(success) {
        debugger;
      }.bind(this), function(error) {
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
  situacionRightInputFields: [
    //this comment tricks prettify ;) 
    {
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
    }, {
      labelTextTKey: "fieldLabels.localidad",
      tooltipTextTKey: "",
      fieldName: "localidad",
      fieldType: "dynamicSelect",
      optionsKey: "provinces",
    }
  ],
  situacionLeftInputFields: [
    //this comment tricks prettify ;) 
    // {
    //   labelTextTKey: "fieldLabels.direccion",
    //   tooltipTextTKey: false,
    //   fieldName: "direccion",
    //   fieldType: "simpleInput",
    //   inputType: "text",
    //   constraints: {
    //     inputValue: {
    //       length: {
    //         minimum: 2,
    //         tooShort: "needs to have %{count} characters or more"
    //       }
    //     }
    //   }
    // }, 
    {
      labelTextTKey: "fieldLabels.direccionReal",
      tooltipTextTKey: false,
      fieldName: "street_address",
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
    // {
    //   labelTextTKey: "fieldLabels.direccionMapa",
    //   tooltipTextTKey: false,
    //   fieldName: "direccionPropiedad",
    //   fieldType: "simpleInput",
    //   inputType: "text",
    //   constraints: {
    //     inputValue: {
    //       length: {
    //         minimum: 2,
    //         tooShort: "needs to have %{count} characters or more"
    //       }
    //     }
    //   }
    // },
  ],

  geo: function() {
    var geo = Ember.Object.create({
      longitude: this.get("addressDetails.longitude"),
      latitude: this.get("addressDetails.latitude"),
      streetAddress: this.get("addressDetails.street_address"),
      searchResults: "",
      map: "",
      allMapMarkers: null,
    });

    return geo;
  }.property(),
  isActive: function() {
    return this.activeTabName.toLowerCase() === "location";
  }.property("activeTabName"),

});
