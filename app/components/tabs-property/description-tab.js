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
  // languagessss: [{
  //   languageKey: "en",
  //   // titleLabelKey: "fieldLabels.tituloIngles",
  //   // descriptionLabelKey: "fieldLabels.descripcionIngles",
  //   // labelKeys like above no longer used but still on server side translations (19 dec 2015)
  //   titleLabelKey: "fieldLabels.title",
  //   descriptionLabelKey: "fieldLabels.description",
  //   titleFieldName: "titleEn",
  //   descriptionFieldName: "descriptionEn",
  // }],

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

  //   contentForForm: function() {
  //     var contentForForm = [];
  // debugger;
  //     var propertyResource = this.get("propertyResource");
  //     // var contentForForm = [];
  //     propertyResource.forEach(function(content) {
  //       if (content.get("key") === "tagLine") {
  //         content.set("isPlainText", true);
  //       }
  //     });
  //     return propertyResource;
  //   }.property("propertyResource"),

  isActive: function() {
    return this.activeTabName.toLowerCase() === "descripcion";
  }.property("activeTabName"),

});
