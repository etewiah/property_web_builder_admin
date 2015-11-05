import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  fieldOptions: function() {
    var fieldOptionKeys = this.get("fieldKeys")[this.get("fieldDetails.optionsKey")];

    // the fieldOptionKeys are an array of i18n keys which are obtained from here:
    // /api/v1/lang/field_keys
    var fieldOptions = [];

    fieldOptionKeys.forEach(function(option){
      var label = this.get("i18n").t(option).string || "Unknown";
      fieldOptions.push({
        value: option,
        label: label
      });
    }.bind(this));

    var currentValue = this.get("propertyResource." + this.fieldDetails.fieldName) || "";
    // this is the only way I can figure out of setting an empty value for selectpicker
    // var currentOption = fieldOptions.findBy("value", currentValue);
    // var currentOptionTitle = currentOption ? currentOption.label : "";
    if (Ember.isEmpty(fieldOptions.findBy("value", currentValue))) {
      fieldOptions.pushObject({
        value: "",
        label: ""
      });
    }


    // debugger;
    return fieldOptions.sortBy("label");
  }.property(),
  setupComponent: function() {
    this.$(".ayuda").tooltip();
    // propertyResource obect contains the fields and current value of each field
    // find current value of the field we need to render
    var currentValue = this.get("propertyResource." + this.fieldDetails.fieldName) || "";
    var fieldOptions = this.get("fieldOptions");
    var currentOption = fieldOptions.findBy("value", currentValue);
    var currentOptionTitle = currentOption ? currentOption.label : "";

    var sp = this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    }).val(currentOptionTitle)
    sp.on('change', function(evt) {

// TODO - currently using the label of the select option 
// should really use the value as its a bit cleaner..,

      var selected = evt.target.value;
      // $(this).find("option:selected").val();
      var fieldOptions = this.get("fieldOptions");
      var selectValue = fieldOptions.findBy("label", selected).value;
      this.set("propertyResource." + this.fieldDetails.fieldName, selectValue);

    }.bind(this));

    this.$('.selectpicker').selectpicker('refresh');
    // this.set("inputValue", this.get("propertyResource." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),

});
