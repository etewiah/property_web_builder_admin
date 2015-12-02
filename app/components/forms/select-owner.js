import Ember from 'ember';


export default Ember.Component.extend({


  clientSelectValues: function(){
    return this.get("fieldKeys.clients");
  }.property(),


  setupComponent: function() {
    var sp = this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    });
debugger;
    sp.on('change', function(evt) {
      // var fieldName = this.get("fieldDetails.fieldName");
      var selected = evt.target.value;
      // above is a string representing the id of the client selected

      var propertyResource = this.get("resourceObject");
      propertyResource.setOwner(selected);

    }.bind(this));

    this.$('.selectpicker').selectpicker('refresh');
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement')

});
