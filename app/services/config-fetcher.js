// https://github.com/jamesarosen/ember-i18n/wiki/Example:-Fetching-Translations-Live
// app/services/translations-fetcher.js
import Ember from "ember";
import { request } from "ic-ajax";
const { Service, inject } = Ember;

const BASE_PATH = '/api/v1/config';

export default Service.extend({
  // i18n: inject.service(),

  // fetch(locale) {
  //   // var i18n = this.get('i18n');
  //   // locale is set in admin route and passed in here
  //   var translationsPath = BASE_PATH;
  //   return {
  //     defaultBounds: 66
  //   };
  //   // return request(translationsPath)

  //   // .then(this._addTranslations.bind(this));
  // },

  getConfigForKey(configKey) {
    var config = {
      defaultBounds: {
        ne: "43.293499628577926, 4.857177734375",
        sw: "36.56293033928735, -11.776123046875"
      }
    };
    return config[configKey];
  }
});