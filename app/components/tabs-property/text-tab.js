import Ember from 'ember';


export default Ember.Component.extend({
  languages: function() {
    var supportedLanguages = this.get("supportedLanguages");
    var languages = [];
    supportedLanguages.forEach(function(language) {
      var langKey = language.split("-")[0];
      var titleFieldName = "title" + langKey.capitalize();
      var descriptionFieldName = "description" + langKey.capitalize();
      languages.push({
        languageKey: langKey,
        titleLabelKey: "fieldLabels.title",
        descriptionLabelKey: "fieldLabels.description",
        titleFieldName: titleFieldName,
        descriptionFieldName: descriptionFieldName,
      });
    });
    return languages;
  }.property(),

  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("resourceObject");
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
    return this.activeTabName.toLowerCase() === "text";
  }.property("activeTabName"),

});
