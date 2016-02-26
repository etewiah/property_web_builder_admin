import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    updateTranslationsArray: function(translations, operation) {
      debugger;
      this.get("groupedTranslations1").unshiftObject(translations);
    }
  },
  // locales: ["en", "es"],
  i18n: Ember.inject.service(),

  groupedTranslations1: function() {
    var currentLocale = this.get("i18n.locale");
    var currentLocaleTranslations = this.get("adminTranslations.translations").filterBy("locale", currentLocale).sortBy("i18n_value");
    // above is only needed to get a unique correctly sorted list of keys that I can use
    // to create groupedTranslations
    // var languages = this.get("languages") || [];
    var groupedTranslations1 = [];
    var allAdminTranslations = this.get("adminTranslations.translations");
    currentLocaleTranslations.forEach(function(translateItem){
      groupedTranslations1.push(allAdminTranslations.filterBy("i18n_key", translateItem.i18n_key));
    });

    // // sortorder below will be a bit random if there are significant differences between languages
    // // TODO - fix sortorder
    // var adminTranslations = this.get("adminTranslations.translations").sortBy("i18n_value");
    // var groupedTranslations1 = [];
    // var parsedTranslations = [];
    // debugger;
    // adminTranslations.forEach(function(translateItem) {
    //   if (parsedTranslations.contains(translateItem.i18n_key)) {
    //     // a groupedTranslations array item is also an array - and that second array contains
    //     // translations for each locale
    //     // parsedTranslations containing a key indicates that U have already added that batch of
    //     // translations so do nothing;
    //   } else {
    //     // have to sort batches by locale
    //     groupedTranslations1.push(adminTranslations.filterBy("i18n_key", translateItem.i18n_key).sortBy("locale"));
    //     parsedTranslations.push(translateItem.i18n_key);
    //   }
    // });

    var groupedTranslations2 = [];
    if (groupedTranslations1.length > 7) {
      var half_length = Math.ceil(groupedTranslations1.length / 2);
      groupedTranslations2 = groupedTranslations1.splice(half_length, groupedTranslations1.length);
    }
    this.set("groupedTranslations2", groupedTranslations2);

    return groupedTranslations1;

  }.property("adminTranslations"),




  // isActive: function() {
  //   return this.activeTabName.toLowerCase() === "inicio";
  // }.property("activeTabName"),

});
