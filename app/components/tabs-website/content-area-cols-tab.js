import Ember from 'ember';
// import ContentPhoto from "../../models/content-photo";
// import Content from "../../models/web-content";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // languages: ["En", "Es"],

  actions: {

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



});
