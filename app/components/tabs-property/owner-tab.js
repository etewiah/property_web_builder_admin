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

  // owner: function() {
  //   var owner = this.get("resourceObject.owner");
  //   // if (owner) {
  //   //   return owner.get("firstObject");
  //   // }
  //   return owner;
  // }.property("resourceObject.owner"),


  setupComponent: Ember.observer('activeTabName', function() {
    if (this.get("isActive")) {
      // need to call 
      debugger;
      if (!this.get("resourceObject.owner")) {
        this.setupOwnerSelector();
      }
    }
  // }),
  }).on('didInsertElement'),

  setupOwnerSelector: function() {
    var sp = this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    });
    sp.on('change', function(evt) {
      // var fieldName = this.get("fieldDetails.fieldName");
      var selected = evt.target.value;
      // above is a string representing the id of the client selected

      var propertyResource = this.get("resourceObject");
      propertyResource.setOwner(selected);

    }.bind(this));

    this.$('.selectpicker').selectpicker('refresh');
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }

});
