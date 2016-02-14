export function initialize( container, application ) {
  Ember.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    var token = Cookies.get('inmo_tok')
    // Cookies.set('inmo_tok', 'KdcvzQaysCKV41b-uDB1')
    // feb 2016 - option for auth - NYIU
    if(token){
      jqXHR.setRequestHeader('X-CSRF-Token', token);
    }
  });
}

export default {
  name: 'ajax-prefilter',
  initialize: initialize
};

