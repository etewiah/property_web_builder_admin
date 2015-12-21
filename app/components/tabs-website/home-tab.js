import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";


export default Ember.Component.extend({
  // languages: ["En", "Es"],

  actions: {
    addPhotosFromUrls: function(remoteUrls) {
      // TODO - validate remote urls..
      // console.log();
      var contentResources = this.get("contentResources");
      // This isn't the most robust implementation - above relies on content with tag 
      // corresponding to current route being available on server
      // Below relies on that content containing an item with correct key
      var contentWithPhotos = contentResources.findBy("key", "landingPageHero");
      contentWithPhotos.addPhotosFromUrls(remoteUrls, function(successResponse) {
        // this.actions.refreshPhotos(successResponse);
        // note, below is send and not sendAction
        this.send("refreshPhotos", successResponse);
      }.bind(this));

    },
    refreshPhotos: function(response) {
      // console.log();
      var photoModels = this.get("landingPagePhotos");
      var uploadedPhotos = [];
      response.forEach(function(photo) {
        uploadedPhotos.push(ContentPhoto.create(photo));
      }.bind(this));

      photoModels.pushObjects(uploadedPhotos);
      this.set("landingPagePhotos", photoModels);
    },
    deletePhoto: function(photo) {
      photo.remove(function(success) {
          var photoModels = this.get("landingPagePhotos");
          // console.log(photo);
          photoModels.removeObject(photo);
        }.bind(this),
        function(error) {
          // TODO - handle error
        }.bind(this));
    },
    saveContentItem: function(contentItem) {
      function success(contentItem) {
        // self.transitionToRoute('posts.show', post);
      }
      function failure(reason) {
        // handle the error
      }
      contentItem.save().then(success).catch(failure);
    }
  },

  contentForForm: function() {
    // All this does is add a property saying if item is plainText 
    // Should probably have that as a property saved on the model..
    // there is an "input_type" field on the model I could use
    var contentResources = this.get("contentResources");
    // var contentForForm = [];
    contentResources.forEach(function(content) {
      if (content.get("key") === "tagLine") {
        content.set("isPlainText", true);
      }
    });
    return contentResources;
  }.property("contentResources"),


  landingPagePhotos: function() {
    var contentResources = this.get("contentResources");
    var landingPagePhotos = contentResources.findBy("key", "landingPageHero").get("photoModels");
    return landingPagePhotos;
  }.property("contentResources"),

  addPhotoEndpoint: function() {
    var contentResources = this.get("contentResources");
    var landingPageContent = contentResources.findBy("key", "landingPageHero");
    var addPhotoEndpoint = "/api/v1/web_contents/" + landingPageContent.id + "/photos";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),


  isVisible: function() {
    return this.get("activeTabName").toLowerCase() === "home";
  }.property("activeTabName"),

});
