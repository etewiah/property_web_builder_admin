import Ember from 'ember';


export default Ember.Component.extend({
  // languages: [{
  //   contentFieldName: "En",
  // }, {
  //   contentFieldName: "Es",
  // }],
  languages: ["En", "Es"],
  groupedTranslations1: function() {
    var adminTranslations = this.get("adminTranslations");
    var groupedTranslations1 = [];
    var parsedTranslations = [];
    adminTranslations.forEach(function(translateItem) {
      if (parsedTranslations.contains(translateItem.i18n_key)) {
        // do nothing;
      } else {
        groupedTranslations1.push(adminTranslations.filterBy("i18n_key", translateItem.i18n_key));
        parsedTranslations.push(translateItem.i18n_key);
      }
    });
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
