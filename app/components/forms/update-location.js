import Ember from 'ember';

export default Ember.Component.extend({
  // classNames: ['form-group', 'fg-float'],

  setupComponent: function() {
    // http://stackoverflow.com/questions/6359995/get-city-from-geocoder-results
    // var addressComponents = this.get("gmapLocationObject.address_components");
    var gmapLocationObject = this.get("gmapLocationObject");
    // var itemRoute = '';
    // var itemLocality = '';
    // var itemCountry = '';
    // var itemPc = '';
    // var itemSnumber = '';

    var newAddress = {};
    newAddress.streetAddress = gmapLocationObject.formatted_address;
    // newAddress.direccionPropiedad = gmapLocationObject.formatted_address;
    newAddress.latitude = gmapLocationObject.geometry.location.lat();
    newAddress.longitude = gmapLocationObject.geometry.location.lng();


    // iterate through address_component array
    $.each(gmapLocationObject.address_components, function(i, address_component) {
      console.log('address_component:' + i);

      if (address_component.types[0] === "route") {
        // console.log(i + ": route:" + address_component.long_name);
        newAddress.streetAddress = address_component.long_name;
      }

      if (address_component.types[0] === "locality") {
        // console.log("town:" + address_component.long_name);
        newAddress.city = address_component.long_name;
      }

      if (address_component.types[0] === "country") {
        // console.log("country:" + address_component.long_name);
        newAddress.country = address_component.long_name;
      }

      if (address_component.types[0] === "postal_code_prefix") {
        debugger;
        // console.log("pc:" + address_component.long_name);
        newAddress.postalCode = address_component.long_name;
      }
      if (address_component.types[0] === "postal_code") {
        // console.log("pc:" + address_component.long_name);
        newAddress.postalCode = address_component.long_name;
      }
      if (address_component.types[0] === "street_number") {
        // console.log("street_number:" + address_component.long_name);
        newAddress.streetNumber = address_component.long_name;
      }
      if (address_component.types[0] === "administrative_area_level_1") {
        // console.log("administrative_area_level_1:" + address_component.long_name);
        // newAddress.province = address_component.long_name;
        newAddress.region = address_component.long_name;

      }
      if (address_component.types[0] === "administrative_area_level_2") {
        // console.log("administrative_area_level_1:" + address_component.long_name);
        newAddress.aal2 = address_component.long_name;
      }
      if (address_component.types[0] === "administrative_area_level_3") {
        // console.log("administrative_area_level_1:" + address_component.long_name);
        newAddress.aal3 = address_component.long_name;
      }
      if (address_component.types[0] === "administrative_area_level_4") {
        // console.log("administrative_area_level_1:" + address_component.long_name);
        newAddress.aal4 = address_component.long_name;
      }
      //return false; // break the loop   
    });
    // debugger;


    this.set("newAddress", newAddress);
  }.observes("gmapLocationObject").on("init"),
  // }.on('init'),

  actions: {
    saveNewAddress: function() {
      this.sendAction('updateLocationAction', this.get("newAddress"));
    },
    cancel: function() {
      this.sendAction('cancelAction');
    }
  }
});
