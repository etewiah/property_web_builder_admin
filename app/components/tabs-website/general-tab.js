import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  // languages: ["En", "Es"],
  changedFields: [],
  actions: {
    addPhotosFromUrls: function(remoteUrls) {
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
      // console.log();
      var photoModels = this.get("logoPhoto");
      var uploadedPhotos = [];
      response.forEach(function(photo) {
        // console.log(uploadedPhotos);
        debugger;
        uploadedPhotos.push(ContentPhoto.create(photo));
      }.bind(this));

      photoModels.pushObjects(uploadedPhotos);
      this.set("logoPhoto", photoModels);
    },
    deletePhoto: function(photo) {
      photo.remove(function(success) {
          var photoModels = this.get("logoPhoto");
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


  logoPhoto: function() {
    var contentResources = this.get("contentResources");
    var logoPhoto = contentResources.findBy("key", "logo").get("photoModels");
    return logoPhoto;
  }.property("contentResources"),

  addPhotoEndpoint: function() {
    var contentResources = this.get("contentResources");
    var landingPageContent = contentResources.findBy("key", "logo");
    var addPhotoEndpoint = "/api/v1/web_contents/" + landingPageContent.id + "/photo";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),

  // -using dynamic components so no longer needed
  // isVisible: function() {
  //   return this.get("activeTabfieldName").toLowerCase() === "general";
  // }.property("activeTabName"),

});
