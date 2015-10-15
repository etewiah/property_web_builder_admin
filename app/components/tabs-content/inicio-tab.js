import Ember from 'ember';


export default Ember.Component.extend({
  languages: [{
    contentLabelKey: "fieldLabels.descripcionIngles",
    contentFieldName: "rawEn",
  }, {
    contentLabelKey: "fieldLabels.descripcionEspanol",
    contentFieldName: "rawEs",
  }],
  // contentItem: function(){
  //   return this.contentResources.findBy("id", "test");
  // }.property("contentResources"),

  actions: {
    saveContentItem: function(contentItem) {
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


  isActive: function() {
    return this.activeTabName.toLowerCase() === "inicio";
  }.property("activeTabName"),

});
