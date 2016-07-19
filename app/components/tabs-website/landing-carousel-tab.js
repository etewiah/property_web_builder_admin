import Ember from 'ember';
// import ContentPhoto from "../../models/content-photo";
// import Content from "../../models/web-content";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // languages: ["En", "Es"],

  actions: {
    // addPhotosFromUrls: function(remoteUrls) {
    //   // TODO - validate remote urls..
    //   // console.log();
    //   var contentResources = this.get("contentResources");
    //   // This isn't the most robust implementation - above relies on content with tag 
    //   // corresponding to current route being available on server
    //   // Below relies on that content containing an item with correct key
    //   var contentWithPhotos = contentResources.findBy("key", "landingPageHero");
    //   contentWithPhotos.addPhotosFromUrls(remoteUrls, function(successResponse) {
    //     // this.actions.refreshPhotos(successResponse);
    //     // note, below is send and not sendAction
    //     this.send("refreshPhotos", successResponse);
    //   }.bind(this));

    // },
    refreshCarouselItems: function(response) {
      console.log(this.store);
      var carouselItems = this.get("contentResources");
      var store = this.get("store");
      // http://emberjs.com/api/data/classes/DS.Store.html#method_push
      store.pushPayload(response);
      // This has really been a pain - only the above works (after I ensured
      // I was serializing correctly on server side )
      // store.pushPayload("webContent",response.data);
      // store.push(response);
      // var newContent = store.createRecord("webContent", response);
      // carouselItems.pushObject(newContent);
      // above generates the ff error:
      // https://github.com/emberjs/data/issues/3313
      // internalModel.getRecord is not a function

      var refreshedContent = store.peekAll('webContent');
      this.set("contentResources", refreshedContent);
    },
    deleteCarouselItem: function(carouselItem) {
      function success(contentItem) {
      }
      function failure(reason) {
        // handle the error
      }
      carouselItem.destroyRecord().then(success).catch(failure);
    },
    saveContentItem: function(contentItem) {
      function success(contentItem) {
        // self.transitionToRoute('posts.show', post);
      }
      function failure(reason) {
        // handle the error
      }
      // debugger;
      contentItem.save().then(success).catch(failure);
    }
  },

  // contentForForm: function() {
  //   // All this does is add a property saying if item is plainText 
  //   // Should probably have that as a property saved on the model..
  //   // there is an "input_type" field on the model I could use
  //   var contentResources = this.get("contentResources");
  //   // var contentForForm = [];
  //   contentResources.forEach(function(content) {
  //     if (content.get("key") === "tagLine") {
  //       content.set("isPlainText", true);
  //     }
  //   });
  //   return contentResources;
  // }.property("contentResources"),


  // landingCarouselPhotos: function() {
  //   return this.get("contentResources.content");
  // }.property("contentResources"),

  addPhotoEndpoint: function() {
    // var contentResources = this.get("contentResources");
    // var landingPageContent = contentResources.findBy("key", "landingPageHero");
    var addPhotoEndpoint = "/api/v1/web_contents/photo/landing-carousel";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),


});
