import Ember from 'ember';


export default Ember.Component.extend({
  // languages: [{
  //   contentFieldName: "En",
  // }, {
  //   contentFieldName: "Es",
  // }],
  languages: ["En","Es"],
  // contentItem: function(){
  //   return this.contentResources.findBy("id", "test");
  // }.property("contentResources"),

  actions: {
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


  isVisible: function() {
    return this.get("activeTabName").toLowerCase() === "about-us";
  }.property("activeTabName"),

});
