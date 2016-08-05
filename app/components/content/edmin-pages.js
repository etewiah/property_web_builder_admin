import Ember from 'ember';


export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  actions: {
    deleteContentItem: function() {
      var itemToDelete = this.get("contentResources.firstObject");
      function success(contentItem) {
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // handle the error
      }
      // var store = this.get("store");
      // store.deleteRecord(contentResources.firstObject)
      // deleteRecord does not seem to make a serverside change
      // and does not return a promise obj either
      itemToDelete.destroyRecord().then(success).catch(failure);
    },
    createContentItem: function() {
      // var newItem = this.store.createRecord('webContent');
      // above will not work
      var store = this.get("store");
      var contentKey = this.get("contentKey");
      var newItem = store.createRecord('webContent');
      newItem.set("key", contentKey);
      newItem.set("tag", "wl");

      var that = this;

      function success(contentItem) {
        var contentResources = that.get("contentResources");
        var refreshedContent = store.peekAll('webContent').filterBy("key", contentKey);
        that.set("contentResources", refreshedContent);

        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // handle the error
      }
      newItem.save().then(success).catch(failure);
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


});
