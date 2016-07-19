import Ember from 'ember';


export default Ember.Component.extend({
  languages: function() {
    var supportedLanguages = this.get("supportedLanguages");
    var languages = [];
    supportedLanguages.forEach(function(language) {
      var titleFieldName = "title" + language.capitalize();
      var descriptionFieldName = "description" + language.capitalize();
      languages.push({
        languageKey: language,
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
