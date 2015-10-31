import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewAddress: function() {
      this.sendAction('updateLocationAction', this.get("newAddress"));
    },
    cancel: function(){
      this.sendAction('cancelAction');
    }
  }
});
