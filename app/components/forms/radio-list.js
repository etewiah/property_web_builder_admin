// created for selection of site template
// and for now only works for setting site template..
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  i18n: Ember.inject.service(),
  actions: {
    radioChanged: function(newFieldOption, el) {
      // below will set site_template_id on tenant object to new value
      this.set("resourceObject." + this.fieldDetails.fieldName, newFieldOption);
      var fieldName = this.get("fieldDetails.fieldName");

      var hasChanged = (this.get("serverValue") !== newFieldOption);
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
        fieldName: fieldName
      });
    },
  },
  // fieldOptionObjects: function() {
  //   var fieldOptionObjects = [];
  //   // var displayValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
  //   this.get("fieldOptions").forEach(function(fieldOption) {
  //     // if (fieldOption.value === displayValue.toString()) {
  //     //   fieldOption.checked = true;
  //     // } else {
  //     //   fieldOption.checked = false;
  //     // }
  //     var fieldOptionObject = Ember.Object.create(fieldOption);
  //     // this.get("i18n").t(option).string || "Unknown";
  //     fieldOptionObjects.push(fieldOptionObject);
  //   }.bind(this));


  //   return fieldOptionObjects.sortBy("label");
  // }.property("fieldOptions"),


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
    var serverValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    // 
    this.set("displayValue", serverValue);
    this.set("serverValue", serverValue);
  }),



});
