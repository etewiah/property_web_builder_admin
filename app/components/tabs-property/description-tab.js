import Ember from 'ember';


export default Ember.Component.extend({
  languages: [{
    languageKey: "en",
    // titleLabelKey: "fieldLabels.tituloIngles",
    // descriptionLabelKey: "fieldLabels.descripcionIngles",
// labelKeys like above no longer used but still on server side translations (19 dec 2015)
    titleLabelKey: "fieldLabels.title",
    descriptionLabelKey: "fieldLabels.description",
    titleFieldName: "titleEn",
    descriptionFieldName: "descriptionEn",
  }, {
    languageKey: "es",
    titleLabelKey: "fieldLabels.title",
    descriptionLabelKey: "fieldLabels.description",
    titleFieldName: "titleEs",
    descriptionFieldName: "descriptionEs",
  }],

  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("propertyResource");

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
