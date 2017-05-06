// https://github.com/abuiles/rails-csrf/blob/master/app/services/csrf.js

import Ember from 'ember';

// export default Ember.Object.extend({
export default Ember.Service.extend({
  isServiceFactory: true,
  onAjaxComplete: function() {
    var _this = this;
    this.fetchToken();

    Ember.$(document).on("ajaxComplete", function(event, xhr, settings) {
      var csrf_param = xhr.getResponseHeader('X-CSRF-Param'),
      csrf_token = xhr.getResponseHeader('X-CSRF-Token');

      if (csrf_param && csrf_token) {
        _this.setData({csrf_param: csrf_token});
      }
    });


  }.on('init'),
  setPrefilter: function() {
    var token = this.get('data').token;
    var preFilter = function(options, originalOptions, jqXHR) {
      if (options.noCsrfToken) {
        // needed to do this check as sending csrf token header to
        // formspree would result in an error
        return jqXHR;
      } else {
      return jqXHR.setRequestHeader('X-CSRF-Token', token );
        
      }
    };
    $.ajaxPrefilter(preFilter);
  },
  setData: function(data) {
    // Ed - below was Ember.keys before
    var param = Object.keys(data)[0];
    this.set('data', { param: param, token: data[param] });
    this.setPrefilter();

    return this.get('data');
  },
  fetchToken: function() {
    var _this = this;
    var token = Ember.$('meta[name="csrf-token"]').attr('content') || '';

    return Ember.RSVP.resolve().then(function() {
      return _this.setData({'authenticity_token': token });
    });
  }
});
