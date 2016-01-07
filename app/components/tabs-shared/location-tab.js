import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],

  actions: {

    // for properties, saving is generic enough that the method in tab-with-form will work..
    // saveAddressDetails: function() {
    //   // handy to have object passed in referred to simply as resourceObject
    //   // so that "input-field-resolver" works accross the board
    //   var addressDetails = this.get("resourceObject");
    //   debugger;
    //   addressDetails.save(function(success) {
    //     // triggerReset is an action in TabWithForm
    //     this.send("triggerReset");
    //   }.bind(this), function(error) {
    //     // debugger;
    //   }.bind(this));
    // },


    stopConfirming: function() {
      this.set("isConfirming", false);
    },
    mapClicked: function(locationInfo) {
      this.set("gmapLocationObject", locationInfo.clickedLocation);
      this.set("isConfirming", true);
    },

    // will set new address from typing in search box
    // - this new address will have to be confirmed
    updateFromSearch: function(searchResultObject) {
      // var newAddress = {};
      // TODO - parse searchResultObject.address_components..
      // newAddress.streetAddress = searchResultObject.formatted_address;
      // // newAddress.direccionPropiedad = searchResultObject.formatted_address;
      // newAddress.latitude = searchResultObject.geometry.location.lat();
      // newAddress.longitude = searchResultObject.geometry.location.lng();
      // this.set("newAddress", newAddress);
      this.set("gmapLocationObject", searchResultObject);
      this.set("isConfirming", true);
    },

    // confirming address details 
    // after clicking on map or typing in searchbox 
    updateConfirmedAddress: function(newAddress) {
      var resourceWithAddress = this.get("resourceObject");
      // resourceWithAddress.latitude = newAddress.latitude;
      // resourceWithAddress.longitude = newAddress.longitude;
      // resourceWithAddress.direccionPropiedad = newAddress.direccionPropiedad;
      resourceWithAddress.set("streetAddress", newAddress.streetAddress);
      resourceWithAddress.set("streetNumber", newAddress.streetNumber);
      resourceWithAddress.set("city", newAddress.city);
      resourceWithAddress.set("postalCode", newAddress.postalCode);
      resourceWithAddress.set("country", newAddress.country);
      resourceWithAddress.set("longitude", newAddress.longitude);
      resourceWithAddress.set("latitude", newAddress.latitude);

      // TODO - figure out which of these 3 is correct
      resourceWithAddress.set("region", newAddress.region);
      resourceWithAddress.set("locality", newAddress.region);
      resourceWithAddress.set("zone", newAddress.region);

      resourceWithAddress.save(function(success) {
        this.set("isConfirming", false);
      }.bind(this), function(error) {
        debugger;
        var errorMessage = "Sorry, there has been an error.";
        if (error.responseJSON && error.responseJSON.errors) {
          errorMessage = error.responseJSON.errors[0];
        }
      }.bind(this));
      // .then(transitionToPost).catch(failure);
    }
  },
  situacionRightInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "zone",
      tooltipTextTKey: false,
      // TODO - decide on zone vrs region
      fieldName: "region",
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


      //TODO will have to come back to provinces later
      //   labelTextTKey: "localidad",
      //   tooltipTextTKey: "",
      //   fieldName: "region",
      //   fieldType: "dynamicSelect",
      //   optionsKey: "provinces",
      // }, {
      labelTextTKey: "country",
      tooltipTextTKey: false,
      fieldName: "country",
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
      labelTextTKey: "postCode",
      tooltipTextTKey: false,
      fieldName: "postalCode",
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
  situacionLeftInputFields: [{
      labelTextTKey: "streetAddress",
      tooltipTextTKey: false,
      fieldName: "streetAddress",
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
    },{
      labelTextTKey: "streetNumber",
      tooltipTextTKey: false,
      fieldName: "streetNumber",
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
      labelTextTKey: "city",
      tooltipTextTKey: false,
      fieldName: "city",
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
      longitude: this.get("resourceObject.longitude"),
      latitude: this.get("resourceObject.latitude"),
      streetAddress: this.get("resourceObject.streetAddress"),
      searchResults: "",
      map: "",
      allMapMarkers: null,
    });

    return geo;
  }.property(),
  isActive: function() {
    return this.activeTabName.toLowerCase() === "location" || this.activeTabName.toLowerCase() === "situacion";
  }.property("activeTabName"),

});
