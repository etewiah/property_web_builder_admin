import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  // languages: ["En", "Es"],
  changedFields: [],
  actions: {
    updateAppearance: function(){
      var tenantDetails = this.get("tenantDetails");
      tenantDetails.save(function(successResponse) {
        debugger;
      }.bind(this));
    },
    addPhotosFromUrls: function(remoteUrls) {
      // not yet in use.....
      // TODO - validate remote urls..
      var contentResources = this.get("contentResources");
      // This isn't the most robust implementation - above relies on content with tag 
      // corresponding to current route being available on server
      // Below relies on that content containing an item with correct key
      var contentWithPhotos = contentResources.findBy("key", "logo");
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
      this.set("logoPhoto",  ContentPhoto.create(response));
    },
    // deletePhoto: function(photo) {
    //   photo.remove(function(success) {
    //       var photoModels = this.get("logoPhoto");
    //       // console.log(photo);
    //       photoModels.removeObject(photo);
    //     }.bind(this),
    //     function(error) {
    //       // TODO - handle error
    //     }.bind(this));
    // },
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

  // socialNetworkValues now
  // resourceObject: {
  //   social_media: {
  //     facebook: "ddd"
  //   }
  // },

  socialNetworkFields: [{
    fieldName: "social_media.facebook",
    title: "Facebook",
    class: "fa fa-facebook fa-2x"
    // tooltipTextTKey: false,
    // constraints: {
    //   inputValue: {
    //     url: {
    //       message: "errors.notAUrlVjs"
    //     }
    //   }
    // }
  }, {
    fieldName: "social_media.twitter",
    title: "Twitter",
    class: "fa fa-twitter fa-2x"
  }, {
    fieldName: "social_media.youtube",
    title: "Youtube",
    class: "fa fa-youtube fa-2x"
  }, {
    fieldName: "social_media.linkedin",
    title: "LinkedIn",
    class: "fa fa-linkedin fa-2x"
  }, {
    fieldName: "social_media.googleplus",
    title: "Google Plus",
    class: "fa fa-google-plus fa-2x"
  }, {
    fieldName: "social_media.pinterest",
    title: "Pinterest",
    class: "fa fa-pinterest fa-2x"
  }, {
    fieldName: "social_media.instagram",
    title: "Instagram",
    class: "fa fa-instagram fa-2x"
  }],



  logoPhoto: function() {
    var contentResources = this.get("contentResources");
    var logoPhoto = contentResources.findBy("key", "logo").get("photoModels.firstObject");
    return logoPhoto;
  }.property("contentResources"),

  editPhotoEndpoint: function() {
    // var photoId = 0;
    var contentResources = this.get("contentResources");
    var logoPhoto = contentResources.findBy("key", "logo").get("photoModels.firstObject") || {id: 0};
    var editPhotoEndpoint = "/api/v1/web_contents/photos/" + logoPhoto.id ;
    return editPhotoEndpoint;
  }.property("resourceObject.id"),

  addPhotoEndpoint: function() {
    var contentResources = this.get("contentResources");
    var logoContent = contentResources.findBy("key", "logo") || {id: 0};
    var addPhotoEndpoint = "/api/v1/web_contents/" + logoContent.id + "/photo";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),

  // -using dynamic components so no longer needed
  // isVisible: function() {
  //   return this.get("activeTabfieldName").toLowerCase() === "general";
  // }.property("activeTabName"),

});
