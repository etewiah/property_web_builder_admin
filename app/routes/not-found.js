import Ember from 'ember';

const { Route, inject } = Ember;

export default Ember.Route.extend({

  // translationsFetcher: inject.service(),
  i18n: inject.service(),
// could do more here
// https://pixelhandler.com/posts/how-to-use-404-page-in-your-emberjs-application
  beforeModel: function(transition) {
    // debugger;
    // var localeToUse = transition.params.admin.locale;
    var i18n = this.get('i18n');
    this.transitionTo("admin.setup", i18n.locale);
  },


});
