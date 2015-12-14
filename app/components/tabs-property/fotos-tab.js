import Ember from 'ember';
import PropertyPhoto from "../../models/property-photo";


export default Ember.Component.extend({
  situacionLeftInputFields: [],
  actions: {
    addPhotosFromUrls: function(remoteUrls) {
      // TODO - validate remote urls..
      // console.log();
      var property = this.get("resourceObject");
      property.addPhotosFromUrls(remoteUrls, function(successResponse){
        // this.actions.refreshPhotos(successResponse);
        // note, below is send and not sendAction
        this.send("refreshPhotos", successResponse);
      }.bind(this));

    },
    refreshPhotos: function(response) {
      // console.log();
      var photoModels = this.get("resourceObject.photoModels");
      var uploadedPhotos = [];
      response.forEach(function(photo) {
        // console.log(uploadedPhotos);
        uploadedPhotos.push(PropertyPhoto.create(photo));
      }.bind(this));

      photoModels.pushObjects(uploadedPhotos);
      this.set("resourceObject.photoModels", photoModels);
    },
    deletePhoto: function(photo) {
      photo.remove(function(success) {
          var photoModels = this.get("resourceObject.photoModels");
          // console.log(photo);
          photoModels.removeObject(photo);
        }.bind(this),
        function(error) {
          // TODO - handle error
        }.bind(this));
    }
  },

  addPhotoEndpoint: function() {
    var addPhotoEndpoint = "/api/v1/properties/" + this.get("resourceObject.id") + "/photo";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),

  isActive: function() {
    return this.activeTabName.toLowerCase() === "fotos";
  }.property("activeTabName"),

});
