import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";

// no need for TabWithForm here
export default Ember.Component.extend({
  // languages: ["En","Es"],

  actions: {
    addPhotosFromUrls: function(remoteUrls) {
      // not yet in use.....
      // TODO - validate remote urls..
      var contentResources = this.get("contentResources");
      // This isn't the most robust implementation - above relies on content with tag 
      // corresponding to current route being available on server
      // Below relies on that content containing an item with correct key
      var contentWithPhotos = contentResources.findBy("key", "aboutUs");
      contentWithPhotos.addPhotosFromUrls(remoteUrls, function(successResponse) {
        // this.actions.refreshPhotos(successResponse);
        // note, below is send and not sendAction
        this.send("refreshPhotos", successResponse);
      }.bind(this));

    },
    refreshPhotos: function(response) {
      // currently get the ff error the first time a photo is added
      // Uncaught Error: Assertion Failed: calling set on destroyed object
      // TODO - try fixing - perhaps with a refresh count property which
      // aboutUsPhot can observe.....
      this.set("aboutUsPhoto",  ContentPhoto.create(response));
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


  aboutUsPhoto: function() {
    var contentResources = this.get("contentResources");
    var aboutUsPhoto = contentResources.findBy("key", "aboutUs").get("photoModels.firstObject");
    return aboutUsPhoto;
  }.property("contentResources"),

  editPhotoEndpoint: function() {
    // var photoId = 0;
    var contentResources = this.get("contentResources");
    var aboutUsContent = contentResources.findBy("key", "aboutUs");
    var aboutUsPhoto = { id: 0 };
    if (aboutUsContent) {
      aboutUsPhoto = aboutUsContent.get("photoModels.firstObject") || { id: 0};
    }
    // important that "aboutUs" below is passed with the right casing as its used to lookup
    // correct content for photo on server (but only if photo_id is somehow wrong)
    // hope there aren't any browser clients that send it all lower case (test with chrome was okay)
    var editPhotoEndpoint = "/api/v1/web_contents/photos/" + aboutUsPhoto.id + "/aboutUs" ;
    return editPhotoEndpoint;
  }.property("contentResources"),

  addPhotoEndpoint: function() {
    var contentResources = this.get("contentResources");
    var aboutUsContent = contentResources.findBy("key", "aboutUs") || {id: 0};
    var addPhotoEndpoint = "/api/v1/web_contents/" + aboutUsContent.id + "/photo";
    return addPhotoEndpoint;
  }.property("contentResources"),


});
