import Ember from 'ember';


export default Ember.Component.extend({
  // inputType: function(){
  // }.p

  activateTooltip: function() {
    this.$(".ayuda").tooltip();
    // this.set("inputValue", this.get("propertyResource." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),
  // inputValue: null,

  inputValue: function() {
    // debugger;
    return this.get("propertyResource." + this.fieldDetails.fieldName);
  }.property("propertyResource"),
  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  updateValue: Ember.observer('inputValue', function() {
    var inputValue = this.get("inputValue");
    this.set("propertyResource." + this.fieldDetails.fieldName, inputValue);


    var constraints = this.get("fieldDetails.constraints");

    var validateErrors = validate({
      inputValue: inputValue
    }, constraints);
    // debugger;
    if (validateErrors) {
      this.set("errors", validateErrors.inputValue);
    } else {
      this.set("errors", []);
    }

  }),

  // propertyResourceSetup: function() {
  //   debugger;
  //   // do something
  // }.observes('fieldDetails.fieldName').on('init')
  // propertyResourceSetup: function() {
  //   // debugger;
  //   // do something
  // }.observes('inputValue'),

  // keyUp: function() {
  //   this.doUpdate();
  // },

  // click: function() {
  //   this.doUpdate();
  // },

  // doUpdate: function() {
  //   var inputValue = this.get("inputValue");
  //   this.set("propertyResource." + this.fieldDetails.fieldName, inputValue);
  //   // var content = this.$('.note-editable').html();
  //   // this.set('content', content);
  // }

});
