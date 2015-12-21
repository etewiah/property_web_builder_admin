import Ember from 'ember';


export default Ember.Component.extend({
  // classNames: ['form-group', 'fg-float'],

  activateTooltip: function() {
    this.$(".ayuda").tooltip();
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),
  // inputValue: null,

  inputValue: function() {
    return this.get("resourceObject." + this.fieldDetails.fieldName);
  }.property("resourceObject"),



  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  updateValue: Ember.observer('inputValue', function() {
    var inputValue = this.get("inputValue");
    inputValue = inputValue || "";
    var fieldName = this.get("fieldDetails.fieldName");
    this.set("resourceObject." + fieldName, inputValue);

    // var constraints = this.get("fieldDetails.constraints");
    var constraints = {
      inputValue: {
        url: {
          message: "errors.notAUrlVjs"
        }
      }
    };

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

    var originalValue = this.get("originalValue").toString();

    var hasChanged = (originalValue !== inputValue.toString());
    this.sendAction("valueChangedAction", {
      hasErrors: hasErrors,
      hasChanged: hasChanged,
      fieldName: fieldName,
      originalValue: originalValue
    });

  }),



  setOriginalValue: function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    inputValue = inputValue || "";
    this.set("originalValue", inputValue);
  }.on('init'),

  // each time I save to the server, I increment resetTrigger value
  // this will also trigger when user cancels an edit...
  // TODO - test this!
  resetOriginalValue: Ember.observer('resetTrigger', function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    inputValue = inputValue || "";
    this.set("originalValue", inputValue);

    // tried adding resetTrigger as dependency on inputValue computed property but that did not work..
    this.set("inputValue", inputValue);
    // instead of resetting the value as above when user cancels an edit, I had tried 
    // to be lazy by calling below:
    // this.rerender();
    // does not work :()
  }),

});
