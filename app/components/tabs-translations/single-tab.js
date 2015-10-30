import Ember from 'ember';


export default Ember.Component.extend({
  // languages: [{
  //   contentFieldName: "En",
  // }, {
  //   contentFieldName: "Es",
  // }],
  languages: ["En","Es"],
  groupedTranslations: function(){
    var contentResources = this.get("contentResources");
    var groupedTranslations = [];
    var parsedTranslations = [];
    contentResources.forEach(function(translateItem){
      if (parsedTranslations.contains(translateItem.i18n_key)) {
        // do nothing;
      } else{
        groupedTranslations.push(contentResources.filterBy("i18n_key", translateItem.i18n_key));
        parsedTranslations.push(translateItem.i18n_key);
      }
    });

    return groupedTranslations;
    // return this.contentResources.findBy("id", "test");
  }.property("contentResources"),

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
