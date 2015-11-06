import Ember from 'ember';


export default Ember.Component.extend({
  // classNames: ['form-group', 'fg-float'],

  activateTooltip: function() {
    this.$(".ayuda").tooltip();
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),
  // inputValue: null,

  inputValue: function() {
    // debugger;
    return this.get("resourceObject." + this.fieldDetails.fieldName);
  }.property("resourceObject"),
  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  updateValue: Ember.observer('inputValue', function() {
    var inputValue = this.get("inputValue");
    this.set("resourceObject." + this.fieldDetails.fieldName, inputValue);


    var constraints = this.get("fieldDetails.constraints");

    var validateErrors = validate({
      inputValue: inputValue
    }, constraints, {
      fullMessages: false
    });
    // debugger;
    if (validateErrors) {
      this.set("errors", validateErrors.inputValue);
    } else {
      this.set("errors", []);
    }

  }),

  // resourceObjectSetup: function() {
  //   debugger;
  //   // do something
  // }.observes('fieldDetails.fieldName').on('init')
  // resourceObjectSetup: function() {
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
  //   this.set("resourceObject." + this.fieldDetails.fieldName, inputValue);
  //   // var content = this.$('.note-editable').html();
  //   // this.set('content', content);
  // }

});
