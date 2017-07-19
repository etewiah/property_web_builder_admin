import Ember from 'ember';


export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  classNames: ['form-group', 'fg-float'],
  lostFocus: function() {
    // fixes bug where unable to leave page with error in field
    // but unable to cancel changes either
    var errors = this.get("errors");
    if (errors && errors.length > 0) {
      var originalValue = this.get("originalValue") || "";
      var fieldName = this.get("fieldDetails.fieldName");

      this.sendAction("valueChangedAction", {
        hasErrors: false,
        hasChanged: false,
        fieldName: fieldName,
        originalValue: originalValue
      });
    }
    // http://stackoverflow.com/questions/27894296/detect-focusout-of-entire-component

    // if (this.get('isOpen')) {
    //   Em.run.later(this, function() {
    //     var focussedElement = document.activeElement;
    //     var isFocussedOut = this.$().has(focussedElement).length === 0 && !this.$().is(focussedElement);

    //     if (isFocussedOut) {
    //       this.closeOptions({
    //         focus: false
    //       });
    //     }
    //   }, 0);
    // }
  }.on('focusOut'),

  activateTooltip: function() {
    this.$(".ayuda").tooltip();
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),
  // inputValue: null,

  labelText: function() {
    var labelText = this.get("fieldDetails.labelText");
    if (labelText) {
      return labelText;
    } else {
      var i18n = this.get('i18n');
      var labelTextTKey = this.get("fieldDetails.labelTextTKey") || "";
      return i18n.t(labelTextTKey).toString();
    }
  }.property("fieldDetails.labelText"),

  inputValue: function() {
    return this.get("resourceObject." + this.fieldDetails.fieldName);
  }.property("resourceObject"),

  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  updateValue: Ember.observer('inputValue', function() {
    var inputValue = this.get("inputValue");
    inputValue = inputValue || "";
    var fieldName = this.get("fieldDetails.fieldName");
    this.set("resourceObject." + fieldName, inputValue);


    var constraints = this.get("fieldDetails.constraints");

    var validateErrors = validate({
      inputValue: inputValue
    }, constraints, {
      fullMessages: false
    });
    var hasErrors = false;
    if (validateErrors) {
      this.set("errors", validateErrors.inputValue);
      hasErrors = true;
    } else {
      this.set("errors", []);
    }
    var originalValue = this.get("originalValue") || "";
    // .toString();
    var hasChanged = (originalValue.toString() !== inputValue.toString());
    this.sendAction("valueChangedAction", {
      hasErrors: hasErrors,
      hasChanged: hasChanged,
      fieldName: fieldName,
      originalValue: originalValue
    });

  }),



  setOriginalValue: function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    // inputValue = inputValue || "";
    this.set("originalValue", inputValue);
  }.on('init'),
  // each time I save to the server, I increment resetTrigger value
  // this will also trigger when user cancels an edit...
  // TODO - test this!
  resetOriginalValue: Ember.observer('resetTrigger', function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    // inputValue = inputValue || "";
    // doing above was causing problems with null values getting reset to ""
    this.set("originalValue", inputValue);

    // tried adding resetTrigger as dependency on inputValue computed property but that did not work..
    this.set("inputValue", inputValue);
    // instead of resetting the value as above when user cancels an edit, I had tried 
    // to be lazy by calling below:
    // this.rerender();
    // does not work :()
  }),

});
