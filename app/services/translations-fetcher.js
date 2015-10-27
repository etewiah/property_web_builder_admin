// https://github.com/jamesarosen/ember-i18n/wiki/Example:-Fetching-Translations-Live
// app/services/translations-fetcher.js
// thie service gets used in beforeModel of admin route
import Ember from "ember";
import { request } from "ic-ajax";
const { Service, inject } = Ember;

const BASE_PATH = '/api/v1/client_translations/';

export default Service.extend({
  i18n: inject.service(),

  fetch(locale) {
    // var i18n = this.get('i18n');
    // locale is set in admin route and passed in here
    var translationsPath = BASE_PATH + locale;
    return request(translationsPath).then(this._addTranslations.bind(this));
  },

  _addTranslations(json) {
    const i18n = this.get('i18n');

    Object.keys(json).forEach((locale) => {
      var translations = {};
      json[locale].forEach(function(item){
        translations[item.i18n_key] = item.i18n_value;
      });
      i18n.addTranslations(locale, translations);
    });
    // Object.keys(json).forEach((locale) => {
    //   i18n.addTranslations(locale, json[locale]);
    // });

  }
});