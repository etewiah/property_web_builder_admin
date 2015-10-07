import Ember from 'ember';


export default Ember.Component.extend({
  languages: [{
    titleLabelKey: "fieldLabels.tituloIngles",
    descriptionLabelKey: "fieldLabels.descripcionIngles",
    titleFieldName: "titleEn",
    descriptionFieldName: "descriptionEn",
  }, {
    titleLabelKey: "fieldLabels.tituloEspanol",
    descriptionLabelKey: "fieldLabels.descripcionEspanol",
    titleFieldName: "titleEs",
    descriptionFieldName: "descriptionEs",
  }],
  // languages: function() {
  //   var languages = [];
  //   languages.push({
  //     titleLabelKey: "fieldLabels.tituloIngles",
  //     descriptionLabelKey: "fieldLabels.descripcionIngles",
  //     titleValue: this.get("propertyResource.titleEn")
  //   });
  //   return languages;
  // }.property(),
  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("propertyResource");

      // var self = this;

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
    return this.activeTabName.toLowerCase() === "descripcion";
  }.property("activeTabName"),

});
