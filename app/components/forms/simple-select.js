import Ember from 'ember';


export default Ember.Component.extend({
  setupComponent: function() {
    this.$(".ayuda").tooltip();
    var currentValueIndex = this.get("propertyResource." + this.fieldDetails.fieldName) || 0;
    var currentValue = this.get("fieldDetails.options")[currentValueIndex] ? this.get("fieldDetails.options")[currentValueIndex].titleKey : "";
    this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    }).val(currentValue).on('change', function(evt) {
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
