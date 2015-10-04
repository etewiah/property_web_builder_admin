import Ember from 'ember';


export default Ember.Component.extend({
  setupComponent: function() {
    this.$(".ayuda").tooltip();
    // propertyResource obect contains the fields and current value of each field
    // find the index of the current value of the field we need to render
    var currentValueIndex = this.get("propertyResource." + this.fieldDetails.fieldName) || 0;
    if (this.get("fieldDetails.fieldDbType") === "boolean") {
      currentValueIndex = currentValueIndex ? 1 : 0;
    }
    // 

    var fieldOptions = this.get("fieldDetails.options");
    var currentOption = fieldOptions.findBy("value", currentValueIndex);
    var currentOptionTitle = currentOption ? currentOption.titleKey : "";
    this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    }).val(currentOptionTitle).on('change', function(evt) {
      var selected = evt.target.value;
      // $(this).find("option:selected").val();

      var fieldOptions = this.get("fieldDetails.options");
      var selectValue = fieldOptions.findBy("titleKey", selected).value;
      this.set("propertyResource." + this.fieldDetails.fieldName, selectValue);

    }.bind(this));
    this.$('.selectpicker').selectpicker('refresh');
    // this.set("inputValue", this.get("propertyResource." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),

});
