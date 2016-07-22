import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  i18n: Ember.inject.service(),
  fieldOptions: function() {
    var fieldOptionKeys = this.get("fieldKeys")[this.get("fieldDetails.optionsKey")] || [];

    // the fieldOptionKeys are an array of i18n keys which are obtained from here:
    // /api/v1/lang/field_keys
    var fieldOptions = [];

    fieldOptionKeys.forEach(function(option) {
      var label = this.get("i18n").t(option).string || "Unknown";
      fieldOptions.push({
        value: option,
        label: label
      });
    }.bind(this));

    var currentValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
    // this is the only way I can figure out of setting an empty value for selectpicker
    // var currentOption = fieldOptions.findBy("value", currentValue);
    // var currentOptionValue = currentOption ? currentOption.label : "";
    // if (Ember.isEmpty(fieldOptions.findBy("value", currentValue))) {
    //   fieldOptions.pushObject({
    //     value: "",
    //     label: ""
    //   });
    // }
    // july 2016 - decided to blanket allow setting of null values
    fieldOptions.pushObject({
      value: "",
      label: ""
    });
    return fieldOptions.sortBy("label");
  }.property(),
  setupComponent: function() {
    this.$(".ayuda").tooltip();
    // resourceObject obect contains the fields and current value of each field
    // find current value of the field we need to render
    var currentValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
    var fieldOptions = this.get("fieldOptions");
    var currentOption = fieldOptions.findBy("value", currentValue);
    var currentOptionValue = currentOption ? currentOption.value : "";

    var sp = this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    }).val(currentOptionValue);
    sp.on('change', function(evt) {
      var fieldName = this.get("fieldDetails.fieldName");
      var selected = evt.target.value;
      // $(this).find("option:selected").val();
      var fieldOptions = this.get("fieldOptions");
      var selectValue = fieldOptions.findBy("value", selected).value;
      this.set("resourceObject." + fieldName, selectValue);

      var hasChanged = (this.get("originalValue") !== selectValue);

      this.sendAction("valueChangedAction", {
        hasErrors: false,
        hasChanged: hasChanged,
        fieldName: fieldName
      });

    }.bind(this));

    this.$('.selectpicker').selectpicker('refresh');
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),

  setOriginalValue: function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
    // inputValue = inputValue || "";
    this.set("originalValue", inputValue);
  }.on('init'),
  // each time I save to the server, I increment resetTrigger value
  resetOriginalValue: Ember.observer('resetTrigger', function() {
    var inputValue = this.get("resourceObject." + this.fieldDetails.fieldName);
    this.set("originalValue", inputValue);
  }),



});
