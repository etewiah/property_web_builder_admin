import Ember from 'ember';


export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],

  updateValue: Ember.observer('observableArray.@each.value', function() {
    var hasErrors = false;
    var originalValue = this.get("originalValue") || [];
    var currentValue = [];
    var rawArray = this.get("rawArray");
    this.get("observableArray").forEach(function(arrayItem) {
      // console.log(rawArray);
      // TODO - validate that only valid values are allowed
      rawArray[arrayItem.index] = arrayItem.value;
    });



    // var constraints = this.get("fieldDetails.constraints");

    // var validateErrors = validate({
    //   inputValue: inputValue
    // }, constraints, {
    //   fullMessages: false
    // });
    // var hasErrors = false;
    // if (validateErrors) {
    //   this.set("errors", validateErrors.inputValue);
    //   hasErrors = true;
    // } else {
    //   this.set("errors", []);
    // }

    var hasChanged = (originalValue.toString() !== rawArray.toString());

    var fieldName = this.get("fieldDetails.fieldName");
    this.sendAction("valueChangedAction", {
      hasErrors: hasErrors,
      hasChanged: hasChanged,
      fieldName: fieldName,
      originalValue: originalValue
    });

  }),



  setOriginalValue: function() {
    var rawArray = this.get("rawArray").copy();
    this.set("originalValue", rawArray);
  }.on('init'),
  // each time I save to the server, I increment resetTrigger value
  // this will also trigger when user cancels an edit...
  // TODO - test this!
  resetOriginalValue: Ember.observer('resetTrigger', function() {
    var rawArray = this.get("rawArray");
    // important to recopy rawArray and reset originalValue here otherwise  
    // they end up pointing to the same object
    this.set("originalValue", rawArray.copy());
    //     // tried adding resetTrigger as dependency on rawArray computed property but that did not work..
    //     this.set("rawArray", rawArray);
    //     // instead of resetting the value as above when user cancels an edit, I had tried 
    //     // to be lazy by calling below:
    //     // this.rerender();
    //     // does not work :()
  }),

});
