import Ember from 'ember';

export default Ember.Service.extend({
  locale: 'en',
  locales: ['en', 'es'],

  t: function(key) {
    return key;
  },

  addTranslations: function(locale, translations) {
    console.log("Adding translations for " + locale, translations);
  }
});
