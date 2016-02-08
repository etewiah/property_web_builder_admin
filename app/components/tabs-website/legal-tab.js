import Ember from 'ember';


export default Ember.Component.extend({
  // languages: ["En","Es"],

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
