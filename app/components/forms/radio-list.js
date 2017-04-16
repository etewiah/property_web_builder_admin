// used for selecting default currency and area unit
// and perhaps for site templates later
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  i18n: Ember.inject.service(),
  actions: {
    radioChanged: function(newFieldOption, el) {
      // below will set site_template_id on tenant object to new value
      this.set("resourceObject." + this.fieldDetails.fieldName, newFieldOption);
      var fieldName = this.get("fieldDetails.fieldName");

      var serverValue = this.get("serverValue");
      var hasChanged = (serverValue !== newFieldOption);
      // var fieldOptionObjects = this.get("fieldOptionObjects");
      // fieldOptionObjects.forEach(function(fieldOptionObject) {
      //   fieldOptionObject.set("checked", false);
      // });
      // newFieldOption.set("checked", true);
      // Ember.run.scheduleOnce('afterRender', this, function() {
      //   newFieldOption.set("checked", true);
      // });
      this.sendAction("valueChangedAction", {
        hasErrors: false,
        hasChanged: hasChanged,
        fieldName: fieldName,
        // below was add for extras which in case of cancelacion have to be unset individually
        // but has turned out useful for agency which is not an ember-data model
        // - allows me to go through and unset each value in case of cancelation
        originalValue: serverValue
      });
    },
  },
  shouldShowHeader: function() {
    if (this.get("hideHeader")) {
      return false;
    }
    return (this.get("fieldDetails.headerTextTKey"));
  }.property("fieldDetails"),


  setupComponent: function() {
    this.$(".ayuda").tooltip();
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),

  setOriginalValue: function() {
    // resourceObject obect contains the fields and current value of each field
    // find current value of the field we need to render
    var serverValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
    this.set("serverValue", serverValue.toString());
    this.set("displayValue", serverValue.toString());
  }.on('init'),
  // each time I save to the server or cancel changes, I increment resetTrigger value
  savedOrCanceled: Ember.observer('resetTrigger', function() {
    // in case of cancelation, tab-with-form will take care of resetting below:
    var serverValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    this.set("displayValue", serverValue);
    // below is only really necessary when change has been saved to server (not when cancelled):
    this.set("serverValue", serverValue);
  }),



});
