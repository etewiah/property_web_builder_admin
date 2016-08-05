import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],

  actions: {

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
      // resourceWithAddress.set("locality", newAddress.region);
      // resourceWithAddress.set("zone", newAddress.region);

      resourceWithAddress.save().then(function(success) {
        this.set("isConfirming", false);
      }.bind(this)).catch(function(error) {
        var errorMessage = "Sorry, there has been an error.";
        if (error.responseJSON && error.responseJSON.errors) {
          errorMessage = error.responseJSON.errors[0];
        }
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
    // ..

    {
      labelTextTKey: "fieldLabels.hideMap",
      // tooltipTextTKey: "toolTips.hideMap",
      fieldName: "hideMap",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }
  ],
  searchInputFields: [{
    labelTextTKey: "locality",
    tooltipTextTKey: false,
    fieldName: "localityTitle",
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
    labelTextTKey: "zone",
    tooltipTextTKey: false,
    // TODO - decide on zone vrs region
    fieldName: "zoneTitle",
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
  }],
  situacionMiddleInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "streetNumber",
      tooltipTextTKey: false,
      fieldName: "streetNumber",
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
    }

    // {
    //   labelTextTKey: "fieldLabels.obscureMap",
    //   tooltipTextTKey: "toolTips.obscureMap",
    //   fieldName: "obscureMap",
    //   fieldType: "simpleSelect",
    //   fieldDbType: "boolean",
    // },
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
  }, {
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
  }, ],

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
