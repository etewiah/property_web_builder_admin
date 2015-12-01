// This is now essentially only for boolean selects
// TODO - rename and use a radio box instead...
// or have option to use radio box
import Ember from 'ember';

export default Ember.Component.extend({
  // i18n: Ember.inject.service(),
  // fieldOptions: function() {

  //   // below would return a safestring if I didn't call ".string"...
  //   var trueText = this.get("i18n").t("true").string;
  //   var falseText = this.get("i18n").t("false").string;
  //   return [{
  //     value: 1,
  //     titleKey: trueText
  //   }, {
  //     value: 0,
  //     titleKey: falseText
  //   }];

  // }.property(),
  // setupComponent: function() {
  //   this.$(".ayuda").tooltip();
  //   // resourceObject obect contains the fields and current value of each field
  //   // find the index of the current value of the field we need to render
  //   var currentValueIndex = this.get("resourceObject." + this.fieldDetails.fieldName) || 0;
  //   if (this.get("fieldDetails.fieldDbType") === "boolean") {
  //     // in the case of a boolean, retrieving currentValueIndex above could return true, 
  //     // in which case we want to convert that to integer 1
  //     currentValueIndex = currentValueIndex ? 1 : 0;
  //   }
  //   // 
  //   var fieldOptions = this.get("fieldOptions");
  //   var currentOption = fieldOptions.findBy("value", currentValueIndex);
  //   var currentOptionTitle = currentOption ? currentOption.titleKey : "";

  //   this.$(".selectpicker").selectpicker({
  //     iconBase: 'fa',
  //     tickIcon: 'fa-check'
  //   }).val(currentOptionTitle).on('change', function(evt) {
  //     var selected = evt.target.value;
  //     // $(this).find("option:selected").val();
  //     var fieldOptions = this.get("fieldOptions");
  //     var selectValue = fieldOptions.findBy("titleKey", selected).value;
  //     this.set("resourceObject." + this.fieldDetails.fieldName, selectValue);

  //   }.bind(this));
  //   this.$('.selectpicker').selectpicker('refresh');
  //   // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  // }.on('didInsertElement'),

});
