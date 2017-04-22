export function initialize( container, application ) {
      // apr 2017 - currently not using this - inmo_tok cookie is not set
      // in package.json I had     "rails-csrf": "^2.0.1"
      // as a dependency and that did the work
  // now created csrf-manager to superceed that

  // Ember.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
  //   var token = Cookies.get('inmo_tok')
  //   // Cookies.set('inmo_tok', 'KdcvzQaysCKV41b-uDB1')
  //   // feb 2016 - option for auth - NYIU
  //   if(token){
  //     jqXHR.setRequestHeader('X-CSRF-Token', token);
  //   }
  // });
}

export default {
  name: 'ajax-prefilter',
  initialize: initialize
};

