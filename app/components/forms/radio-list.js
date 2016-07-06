// created for selection of site template
// and for now only works for setting site template..
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  i18n: Ember.inject.service(),
  actions: {
    radioChanged: function(newFieldOption, el) {
      // below will set site_template_id on tenant object to new value
      this.set("resourceObject." + this.fieldDetails.fieldName, newFieldOption.value);
      var fieldName = this.get("fieldDetails.fieldName");

      var hasChanged = (this.get("originalValue") !== newFieldOption.value);
      var fieldOptions = this.get("fieldOptions");
      fieldOptions.forEach(function(fieldOption) {
        fieldOption.set("checked", false);
      });
      newFieldOption.set("checked", true);
      this.sendAction("valueChangedAction", {
        hasErrors: false,
        hasChanged: hasChanged,
        fieldName: fieldName
      });
    },
  },
  // fieldOptions: function() {
  //   var fieldOptions = [];
  //   var currentValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";

  //   // fieldOptionKeys
  //   this.get("fieldKeys.data").forEach(function(option) {
  //     var fieldOption = {
  //       value: option.id,
  //       label: option.attributes.title
  //     };
  //     if (option.id === currentValue.toString()) {
  //       fieldOption.checked = "checked";
  //     }
  //     // this.get("i18n").t(option).string || "Unknown";
  //     fieldOptions.push(fieldOption);
  //   }.bind(this));


  //   return fieldOptions.sortBy("label");
  // }.property(),
  setupComponent: function() {
    this.$(".ayuda").tooltip();

    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),

  setOriginalValue: function() {

    // resourceObject obect contains the fields and current value of each field
    // find current value of the field we need to render
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
    this.set("originalValue", inputValue.toString());
  }.on('init'),
  // each time I save to the server, I increment resetTrigger value
  resetOriginalValue: Ember.observer('resetTrigger', function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    this.set("originalValue", inputValue.toString());
  }),



});
