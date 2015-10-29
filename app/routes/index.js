import Ember from 'ember';

const { Route, inject } = Ember;

export default Ember.Route.extend({

  translationsFetcher: inject.service(),
  i18n: inject.service(),

  beforeModel: function(transition) {
    // var localeToUse = transition.params.admin.locale;
    var i18n = this.get('i18n');
    this.transitionTo("admin.propiedades", i18n.locale);

    // if (i18n.get("locales").contains(localeToUse)) {
    //   // if the locale param passed in is valid, lets set and use that
    //   i18n.set("locale", localeToUse);
    // } else{
    //   // else lets just use the default
    //   // TODO - set url to reflect default locale
    //   localeToUse = i18n.get("locale");
    // }
    // return this.get('translationsFetcher').fetch(localeToUse);
  },


});
