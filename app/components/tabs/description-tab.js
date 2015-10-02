import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("propertyResource");
      // debugger;

      var self = this;

      function transitionToPost(propertyResource) {
        // debugger;
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }

      propertyResource.save().then(transitionToPost).catch(failure);


    }
  },


  isActive: function() {
    return this.activeTabName.toLowerCase() === "descripcion";
  }.property("activeTabName"),

});
