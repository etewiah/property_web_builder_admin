import Ember from 'ember';


export default Ember.Component.extend({
  // classNames: ['form-group', 'fg-float'],

  // activateTooltip: function() {
  //   this.$(".ayuda").tooltip();
  // }.on('didInsertElement'),

  translationLabel: function() {
    return this.translationBatch[0].i18n_value;
  }.property("translationBatch"),

  
  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  // updateValue: Ember.observer('inputValue', function() {
  //   var inputValue = this.get("inputValue");
  //   this.set("propertyResource." + this.fieldDetails.fieldName, inputValue);


  //   var constraints = this.get("fieldDetails.constraints");

  //   var validateErrors = validate({
  //     inputValue: inputValue
  //   }, constraints, {
  //     fullMessages: false
  //   });
  //   // debugger;
  //   if (validateErrors) {
  //     this.set("errors", validateErrors.inputValue);
  //   } else {
  //     this.set("errors", []);
  //   }

  // }),

});
