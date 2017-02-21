import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

// TODO - replace this with shared/location-tab.js
export default TabWithForm.extend({
  changedFields: [],

  actions: {

    saveAddressDetails: function() {
      // handy to have object passed in referred to simply as resourceObject
      // so that "input-field-resolver" works accross the board
      var addressDetails = this.get("resourceObject");
      addressDetails.save(function(success) {
        // triggerReset is an action in TabWithForm
        this.send("triggerReset");
      }.bind(this), function(error) {
        var errorMessage = "Sorry, there has been an error.";
        if (error.responseJSON && error.responseJSON.errors) {
          errorMessage = error.responseJSON.errors[0];
        }
        this.set('serverError', errorMessage);
      }.bind(this));
    },
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
      // newAddress.street_address = searchResultObject.formatted_address;
      // // newAddress.direccionPropiedad = searchResultObject.formatted_address;
      // newAddress.latitude = searchResultObject.geometry.location.lat();
      // newAddress.longitude = searchResultObject.geometry.location.lng();
      // this.set("newAddress", newAddress);
      this.set("gmapLocationObject", searchResultObject);
      this.set("isConfirming", true);
    },

    // confirming address details 
    // after clicking on map or typing in searchbox 
    updateConfirmedAddress: function(newAddressDetails) {
      var addressDetails = this.get("resourceObject");
      // addressDetails.latitude = newAddressDetails.latitude;
      addressDetails.set("street_number", newAddressDetails.streetNumber);
      addressDetails.set("street_address", newAddressDetails.streetAddress);
      addressDetails.set("city", newAddressDetails.city);
      addressDetails.set("postal_code", newAddressDetails.postalCode);
      addressDetails.set("country", newAddressDetails.country);
      addressDetails.set("region", newAddressDetails.region);
      addressDetails.set("longitude", newAddressDetails.longitude);
      addressDetails.set("latitude", newAddressDetails.latitude);

      addressDetails.save(function(success) {
        this.set("isConfirming", false);
      }.bind(this), function(error) {
        var errorMessage = "Sorry, there has been an error.";
        if (error.responseJSON && error.responseJSON.errors) {
          errorMessage = error.responseJSON.errors[0];
        }
        this.set('serverError', errorMessage);
        // currently using generic error i18n instead of above
      }.bind(this));
      // .then(transitionToPost).catch(failure);
    }
  },


  hideInputFields: function() {
    // should probably do more to verify that property does not have an address than check lat lng.
    var hasNoLatLng = (Em.isEmpty(this.get("resourceObject.latitude")) && Em.isEmpty(this.get("resourceObject.longitude")));
    return hasNoLatLng || this.get("isConfirming");
  }.property("isConfirming"),

  situacionRightInputFields: [
    //this comment tricks prettify ;) 
    {
    //   fieldType: "spaceFiller",
    // }, {
      labelTextTKey: "streetNumber",
      tooltipTextTKey: false,
      fieldName: "street_number",
      fieldType: "simpleInput",
      inputType: "text",
      constraints: {
        inputValue: {
          length: {
            minimum: 1,
            tooShort: "needs to have %{count} characters or more"
          }
        }
      }
    }, {
      labelTextTKey: "region",
      tooltipTextTKey: false,
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
      //   labelTextTKey: "fieldLabels.localidad",
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
    }
  ],
  situacionLeftInputFields: [{
      labelTextTKey: "streetAddress",
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
    //   labelTextTKey: "streetNumber",
    //   tooltipTextTKey: false,
    //   fieldName: "street_number",
    //   fieldType: "simpleInput",
    //   inputType: "text",
    //   constraints: {
    //     inputValue: {
    //       length: {
    //         minimum: 1,
    //         tooShort: "needs to have %{count} characters or more"
    //       }
    //     }
    //   }
    // },
    {
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
    }, {
      labelTextTKey: "postCode",
      tooltipTextTKey: false,
      fieldName: "postal_code",
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
    }
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
      streetAddress: this.get("resourceObject.street_address"),
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
