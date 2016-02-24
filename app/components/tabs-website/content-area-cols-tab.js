import Ember from 'ember';
// import ContentPhoto from "../../models/content-photo";
// import Content from "../../models/web-content";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // languages: ["En", "Es"],

  actions: {

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
      contentItem.save().then(success).catch(failure);
    }
  },


  addPhotoEndpoint: function() {
    debugger;
    // var contentResources = this.get("contentResources");
    // var landingPageContent = contentResources.findBy("key", "landingPageHero");
    var addPhotoEndpoint = "/api/v1/web_contents/photo/landing-carousel";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),


});
