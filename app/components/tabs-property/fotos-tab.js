import Ember from 'ember';


export default Ember.Component.extend({
  situacionLeftInputFields: [  ],
  actions: {
    refreshPhotos: function() {
      debugger;
    },
    deletePhoto: function(photo){
      photo.remove(function(success){
        debugger;
      }.bind(this),
      function(error){
        debugger;
      }.bind(this));
    }
  },

  // propertyPhotos: function() {
  //   // return this.get("resourceObject.propertyPhotos");
  //   // above is a hasMany r/n obj can't get above to work
  //   return this.get("resourceObject.photoModels");
  // }.property(),

  isActive: function() {
    return this.activeTabName.toLowerCase() === "fotos";
  }.property("activeTabName"),

});
