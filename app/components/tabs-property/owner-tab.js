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

});
