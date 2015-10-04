import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("propertyResource");

      // var self = this;

      function transitionToPost(propertyResource) {
          // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
          // handle the error
      }

      propertyResource.save().then(transitionToPost).catch(failure);


    }
  },


  isActive: function() {
    return this.activeTabName.toLowerCase() === "descripcion";
  }.property("activeTabName"),

});
