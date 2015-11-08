// https://github.com/jamesarosen/ember-i18n/wiki/Example:-Fetching-Translations-Live
// app/services/translations-fetcher.js
import Ember from "ember";
import { request } from "ic-ajax";
const { Service, inject } = Ember;

// const BASE_PATH = '/api/v1/config';

export default Service.extend({

  getConfigForKey(configKey) {
    var config = {
      defaultBounds: {
        ne: "43.293499628577926, 4.857177734375",
        sw: "36.56293033928735, -11.776123046875"
      }
    };
    return config[configKey];
  },

  // getFieldKeys: function(id) {
  //   var apiUrl = "/api/v1/lang/field_keys/" ;
  //   return $.ajax(apiUrl, {
  //     type: 'GET',
  //     dataType: 'json'
  //   });
    
  //   // .then(function(result) {
  //   //   return Ember.Object.create(result);
  //   //   // return result;
  //   // }.bind(this), function(error) {
  //   //   return error;
  //   // });
  // }
});