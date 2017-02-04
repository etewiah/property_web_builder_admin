import Ember from 'ember';
import AdminTranslations from "../../models/admin_translations";

export default Ember.Component.extend({
  actions: {
    updateTranslationsArray: function(translations, operation) {
      // below will add a newly created group of translations (at start of curr array)
      this.get("groupedTranslations1").unshiftObject({
        sortKey: "",
        value: translations});
    }
  },
  i18n: Ember.inject.service(),

  groupedTranslations1: function() {
    var currentLocale = this.get("i18n.locale");
    // var currentLocaleTranslations = this.get("adminTranslations.translations").filterBy("locale", currentLocale).sortBy("i18n_value");
    // above is only needed to get a unique correctly sorted list of keys that I can use
    // to create groupedTranslations (means a translation for the current admin locale must exist on the server)
    // var locales = this.get("locales") || [];
    // debugger;

    var uniqueKeys = this.get("adminTranslations.translations").getEach("i18n_key").uniq();
    var groupedTranslations1 = [];
    var allAdminTranslations = this.get("adminTranslations.translations");
    var supportedLocales = this.get("locales");
    uniqueKeys.forEach(function(translateItemKey) {
      var translationsForKey = allAdminTranslations.filterBy("i18n_key", translateItemKey);
      supportedLocales.forEach(function(lang) {
        // console.log(translationsForKey);
        // below adds an empty new admintranslation in case a 
        // supported lang does not have a translation on the server
        if (!translationsForKey.findBy("locale", lang)) {
          var newTranslation = AdminTranslations.create({
            locale: lang,
            i18n_value: "",
            i18n_key: translateItemKey
          });
          translationsForKey.pushObject(newTranslation);
        }
      });
      // for sorting:
      var sortKey = "";
      var currentLocaleTranslation = translationsForKey.findBy("locale", currentLocale);
      if (currentLocaleTranslation) {
        sortKey = currentLocaleTranslation.i18n_value;
      }
      groupedTranslations1.push({
        sortKey: sortKey,
        value: translationsForKey
      });
    });

    // // sortorder below will be a bit random if there are significant differences between locales
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

    // var groupedTranslations2 = [];
    // if (groupedTranslations1.length > 7) {
    //   var half_length = Math.ceil(groupedTranslations1.length / 2);
    //   groupedTranslations2 = groupedTranslations1.splice(half_length, groupedTranslations1.length);
    // }
    // this.set("groupedTranslations2", groupedTranslations2);
    return groupedTranslations1.sortBy("sortKey");

  }.property("adminTranslations"),




  // isActive: function() {
  //   return this.activeTabName.toLowerCase() === "inicio";
  // }.property("activeTabName"),

});
