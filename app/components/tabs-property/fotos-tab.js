import Ember from 'ember';


export default Ember.Component.extend({
  situacionLeftInputFields: [  ],
  // actions: {
  //   savePropertyResource: function() {
  //     var propertyResource = this.get("propertyResource");

  //     // var self = this;

  //     function transitionToPost(propertyResource) {
  //       // self.transitionToRoute('posts.show', post);
  //     }

  //     function failure(reason) {
  //       // handle the error
  //     }

  //     propertyResource.save().then(transitionToPost).catch(failure);


  //   }
  // },

  propertyPhotos: function() {
    // return this.get("resourceObject.propertyPhotos");
    // can't get above to work
    return this.get("resourceObject.photos");
  }.property(),

  isActive: function() {
    return this.activeTabName.toLowerCase() === "fotos";
  }.property("activeTabName"),

});
