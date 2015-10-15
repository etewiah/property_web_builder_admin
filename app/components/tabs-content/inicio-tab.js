import Ember from 'ember';


export default Ember.Component.extend({
  languages: [{
    titleLabelKey: "fieldLabels.tituloIngles",
    descriptionLabelKey: "fieldLabels.descripcionIngles",
    descriptionFieldName: "rawEn",
  }, {
    titleLabelKey: "fieldLabels.tituloEspanol",
    descriptionLabelKey: "fieldLabels.descripcionEspanol",
    descriptionFieldName: "rawEs",
  }],
  contentItem: function(){
    debugger;
    return contentResources;
    // return this.contentResources.findBy("id", "test");
  }.property("contentResources"),

  actions: {
    saveContentItem: function() {
      var contentItem = this.get("contentItem");

      debugger;

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
