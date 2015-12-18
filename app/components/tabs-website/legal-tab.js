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


  // leftContent: function() {
  //   var contentResources = this.get("contentResources");
  //   var leftContent = contentResources.findBy("key", "privacyPolicy");
  //   return leftContent;
  // }.property("contentResources"),

  // rightContent: function() {
  //   var contentResources = this.get("contentResources");
  //   var rightContent = contentResources.findBy("key", "legalAdvice");
  //   return rightContent;
  // }.property("contentResources"),


  isVisible: function() {
    return this.get("activeTabName").toLowerCase() === "legal";
  }.property("activeTabName"),

});
