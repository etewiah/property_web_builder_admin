import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    mapClicked: function(locationInfo) {
      this.set("newAddress",locationInfo.clickedLocation.formatted_address);
      debugger;
    },
    updateLocationFromMap: function(newAddressDetails){
      debugger;
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
      fieldName: "direccionReal",
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
      fieldName: "direccionMapa",
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
    var geo = {
      longitude: this.get("propertyResource.mapaLng"),
      latitude: this.get("propertyResource.mapaLat"),
    }
    return geo;
  }.property(),
  isActive: function() {
    return this.activeTabName.toLowerCase() === "situacion";
  }.property("activeTabName"),

});
