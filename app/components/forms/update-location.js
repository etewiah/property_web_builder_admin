import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewAddress: function() {
      // var newAddressDetails = {
      //   newAddress: this.get("newAddress");
      //   newAddress: this.get("newAddress"),
      //   newAddress: this.get("newAddress")
      // };
      this.sendAction('updateLocationAction', this.get("newAddress"));
    }
  }
});
