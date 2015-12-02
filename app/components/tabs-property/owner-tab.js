import Ember from 'ember';


export default Ember.Component.extend({


  clientSelectValues: function(){
    return this.get("fieldKeys.clients");
  }.property(),

  // actions: {
  //   savePropertyResource: function() {
  //   }
  // },


  isActive: function() {
    return this.activeTabName.toLowerCase() === "owner";
  }.property("activeTabName"),

  setupComponent: function() {
    // var currentValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
    // var fieldOptions = this.get("fieldOptions");
    // var currentOption = fieldOptions.findBy("value", currentValue);
    // var currentOptionValue = currentOption ? currentOption.value : "";
    var sp = this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    });
    sp.on('change', function(evt) {
      // var fieldName = this.get("fieldDetails.fieldName");
      var selected = evt.target.value;
      // above is a string representing the id of the client selected

      // var fieldOptions = this.get("fieldKeys.clients");
      // var selectValue = fieldOptions.findBy("value", selected).value;

      var propertyResource = this.get("resourceObject");

      propertyResource.setOwner(selected);


    }.bind(this));

    this.$('.selectpicker').selectpicker('refresh');
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),

  activate: function(){
    debugger;
  }


});
