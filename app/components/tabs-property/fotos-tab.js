import Ember from 'ember';


export default Ember.Component.extend({
  situacionLeftInputFields: [  ],
  actions: {
    refreshPhotos: function() {
      debugger;
    },
    deletePhoto: function(photo){
      photo.remove(function(success){
        var photoModels = this.get("resourceObject.photoModels");
        // console.log(photo);
        photoModels.removeObject(photo);
      }.bind(this),
      function(error){
        // TODO - handle error
      }.bind(this));
    }
  },

  // photoModels: function() {
  //   // return this.get("resourceObject.photoModels");
  //   // above is a hasMany r/n obj can't get above to work
  //   return this.get("resourceObject.photoModels");
  // }.property(),

  isActive: function() {
    return this.activeTabName.toLowerCase() === "fotos";
  }.property("activeTabName"),

});
