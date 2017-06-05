// https://github.com/jamesarosen/ember-i18n/wiki/Example:-Fetching-Translations-Live
// app/services/translations-fetcher.js
// thie service gets used in beforeModel of admin route
import Ember from "ember";
import { request } from "ic-ajax";
const { Service, inject } = Ember;

const BASE_PATH = '/api/v1/translations/list/';

export default Service.extend({
  i18n: inject.service(),

  versionCheck(){
    var latestPwbVer = "1.0.0";
    var lastSavedVer = Cookies.get('pwb_version') || "0";
    if (latestPwbVer !== lastSavedVer) {
      this.checkForUpdates(latestPwbVer);
      Cookies.set("pwb_version", latestPwbVer);
    }
    console.log("PWB version: " + latestPwbVer);
  },
  checkForUpdates(latestPwbVer) {
    var endPoint = "https://formspree.io/check@propertywebbuilder.com";
    var email = "check@propertywebbuilder.com";
    var result = $.ajax(endPoint, {
      noCsrfToken: true,
      type: 'POST',
      dataType: 'json',
      data: {
        _replyto: email,
        email: email,
        comments: latestPwbVer,
        _subject: 'Version check',
      }
    }).then(function(success) {
    }, function(failure) {
    });
  },

  fetch(locale) {
    // var i18n = this.get('i18n');
    // locale is set in admin route and passed in here
    var translationsPath = BASE_PATH + locale;
    return request(translationsPath).then(this._addTranslations.bind(this, locale));
  },

  _addTranslations(locale, json) {
    const i18n = this.get('i18n');
    var translations = json[locale];
    i18n.addTranslations(locale, translations);
    // below was for when I was getting an array of i18n keys and values
    // Object.keys(json).forEach((locale) => {
    //   var translations = {};
    //   json[locale].forEach(function(item){
    //     translations[item.i18n_key] = item.i18n_value;
    //   });
    //   i18n.addTranslations(locale, translations);
    // });
  }
});
