import Ember from 'ember';


export default Ember.Component.extend({
  activateTooltip: function() {
    this.$(".ayuda").tooltip();
    this.$(".selectpicker").selectpicker({ iconBase: 'fa', tickIcon: 'fa-check' });
    // this.set("inputValue", this.get("propertyResource." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),
  // inputValue: null,

  inputValue: function() {
    // debugger;
    return this.get("propertyResource." + this.fieldDetails.fieldName);
  }.property("propertyResource"),
  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  updateValue: Ember.observer('inputValue', function() {
    var inputValue = this.get("inputValue");
    this.set("propertyResource." + this.fieldDetails.fieldName, inputValue);
  }),

});
