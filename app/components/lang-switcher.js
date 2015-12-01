import Ember from 'ember';


export default Ember.Component.extend({
  // languages: ["En","Es"],



  translationsFetcher: Ember.inject.service(),
  i18n: Ember.inject.service(),

  // beforeModel: function(transition) {
  //   var localeToUse = transition.params.admin.locale;
  //   var i18n = this.get('i18n');
  //   if (i18n.get("locales").contains(localeToUse)) {
  //     // if the locale param passed in is valid, lets set and use that
  //     i18n.set("locale", localeToUse);
  //   } else {
  //     // else lets just use the default
  //     // TODO - set url to reflect default locale
  //     localeToUse = i18n.get("locale");
  //   }
  //   return this.get('translationsFetcher').fetch(localeToUse);
  // },



  actions: {
    changeLanguage: function(locale) {
      var i18n = this.get('i18n');
      location.pathname = location.pathname.replace("/" + i18n.locale + "/", "/" + locale + "/");
      // above does a page refresh which for now is good
      // debugger;
    }
  },

  // languageRoutes: function() {
  //   var locales = this.get("configObject.locales");
  //   var languageRoutes = [];
  //   var currentRouteName = this.get("currentRouteName");
  //   // debugger;
  //   // location.pathname = location.pathname.replace("/es/", "/en/")
  //   return locales;
  // }.property("configObject.locales", "currentRouteName"),


});
