import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewAddress: function() {
      var newAddressDetails = {
        newAddress: this.get("newAddress"),
        newAddress: this.get("newAddress"),
        newAddress: this.get("newAddress")
      };
      this.sendAction('updateLocationAction', newAddressDetails);
    }
  }
  // descriptionValue: Ember.computed('propertyResource', {
  //   get(key) {
  //       return this.get("propertyResource." + this.languageSettings.descriptionFieldName);
  //     },
  //     set(key, value) {
  //       this.set("propertyResource." + this.languageSettings.descriptionFieldName, value);
  //       return value;
  //     }
  // }),
  // titleValue: Ember.computed('propertyResource', {
  //   get(key) {
  //       return this.get("propertyResource." + this.languageSettings.titleFieldName);
  //     },
  //     set(key, value) {
  //       this.set("propertyResource." + this.languageSettings.titleFieldName, value);
  //       return value;
  //     }
  // })
});
