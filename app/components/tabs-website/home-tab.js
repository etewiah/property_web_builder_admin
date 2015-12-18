import Ember from 'ember';


export default Ember.Component.extend({
  // languages: [{
  //   contentFieldName: "En",
  // }, {
  //   contentFieldName: "Es",
  // }],
  languages: ["En","Es"],

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
      var photoModels = this.get("landingPagePhotos");
      var uploadedPhotos = [];
      response.forEach(function(photo) {
        // console.log(uploadedPhotos);
        debugger;
        uploadedPhotos.push(PropertyPhoto.create(photo));
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
      debugger;
      // var contentItem = this.get("contentItem");
      function transitionToPost(contentItem) {
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // handle the error
      }

      contentItem.save().then(transitionToPost).catch(failure);


    }
  },

  landingPagePhotos: function() {
    var contentResources = this.get("contentResources");
    var landingPagePhotos = contentResources.findBy("key","landingPageHero").get("contentPhotos");
    return landingPagePhotos;
  }.property("contentResources"),

  addPhotoEndpoint: function() {
    var contentResources = this.get("contentResources");
    var landingPageContent = contentResources.findBy("key","landingPageHero");
    var addPhotoEndpoint = "/api/v1/web_contents/" + landingPageContent.id + "/photo";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),


  isVisible: function() {
    return this.get("activeTabName").toLowerCase() === "home";
  }.property("activeTabName"),

});
