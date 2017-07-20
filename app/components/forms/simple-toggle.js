import Ember from 'ember';
// TODO - have unique id for input
// this is much simpler than say simple-boolean
// because it does not take care of 
// resetting values etc
export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  i18n: Ember.inject.service(),
  actions: {
    switchToggled: function(fieldDetails){
      var newValue = !!!fieldDetails.toggleValue;
      this.set("fieldDetails.toggleValue", newValue);
      this.sendAction("valueChangedAction", newValue);
    }
  }

});
