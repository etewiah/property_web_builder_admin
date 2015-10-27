// https://github.com/jamesarosen/ember-i18n/wiki/Example:-Fetching-Translations-Live
// app/services/translations-fetcher.js
import Ember from "ember";
import { request } from "ic-ajax";
const { Service, inject } = Ember;

const PATH = '/api/v1/client_translations.json';

export default Service.extend({
  i18n: inject.service(),

  fetch() {
    return request(PATH).then(this._addTranslations.bind(this));
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