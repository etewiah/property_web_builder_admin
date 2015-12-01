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


  // each time I save to the server, I increment resetTrigger value
  resetOriginalValue: Ember.observer('resetTrigger', function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    this.set("originalValue", inputValue);
  }),

  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  updateValue: Ember.observer('inputValue', function() {
    var inputValue = this.get("inputValue");
    inputValue = inputValue || "";
    var fieldName = this.get("fieldDetails.fieldName")
    this.set("resourceObject." + fieldName, inputValue);


    var constraints = this.get("fieldDetails.constraints");

    var validateErrors = validate({
      inputValue: inputValue
    }, constraints, {
      fullMessages: false
    });
    // debugger;
    var hasErrors = false;
    if (validateErrors) {
      this.set("errors", validateErrors.inputValue);
      hasErrors = true;
    } else {
      this.set("errors", []);
    }
    var hasChanged = (this.get("originalValue").toString() !== inputValue.toString());
    this.sendAction("valueChangedAction", {
      hasErrors: hasErrors,
      hasChanged: hasChanged,
      fieldName: fieldName
    });

  }),

  setOriginalValue: function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    inputValue = inputValue || "";
    this.set("originalValue", inputValue);
  }.on('init'),


});
