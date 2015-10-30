import Ember from 'ember';


export default Ember.Component.extend({
  // languages: [{
  //   contentFieldName: "En",
  // }, {
  //   contentFieldName: "Es",
  // }],
  languages: ["En", "Es"],
  groupedTranslations1: function() {
    // sortorder below will be a bit random is there are significant differences between languages
    // TODO - fix sortorder
    var adminTranslations = this.get("adminTranslations").sortBy("i18n_value");
    var groupedTranslations1 = [];
    var parsedTranslations = [];
    adminTranslations.forEach(function(translateItem) {
      if (parsedTranslations.contains(translateItem.i18n_key)) {
        // a groupedTranslations array item is also an array - and that second array contains
        // translations for each locale
        // parsedTranslations containing a key indicates that U have already added that batch of
        // translations so do nothing;
      } else {
        groupedTranslations1.push(adminTranslations.filterBy("i18n_key", translateItem.i18n_key).sortBy("locale"));
        parsedTranslations.push(translateItem.i18n_key);
      }
    });
    // groupedTranslations1 = groupedTranslations1.sortBy("i18n_key");
    // debugger;
    var groupedTranslations2 = [];
    if (groupedTranslations1.length > 7) {
      var half_length = Math.ceil(groupedTranslations1.length / 2);
      groupedTranslations2 = groupedTranslations1.splice(half_length, groupedTranslations1.length);
    }
    this.set("groupedTranslations2", groupedTranslations2)

    return groupedTranslations1;

  }.property("adminTranslations"),

  // actions: {
  //   saveContentItem: function(contentItem) {
  //     // var contentItem = this.get("contentItem");
  //     function transitionToPost(contentItem) {
  //       // self.transitionToRoute('posts.show', post);
  //     }

  //     function failure(reason) {
  //       // handle the error
  //     }

  //     contentItem.save().then(transitionToPost).catch(failure);


  //   }
  // },


  // isActive: function() {
  //   return this.activeTabName.toLowerCase() === "inicio";
  // }.property("activeTabName"),

});
