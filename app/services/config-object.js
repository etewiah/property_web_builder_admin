import Ember from 'ember';
// import Section from '../models/section';
// import User from '../models/user';

export default Ember.Object.extend({
  // below allows starting and stopping ember shepherd across site
  // showHelp: false,
  // endHelp: false,

  // // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
  // isMobile: function() {
  //   return !!navigator.userAgent.match(/Mobi/);
  // }.property(),
  // facebookAppId: "1526901037559714",

  locales: [{
    locale: "en",
    titleKey: "english"
  }, {
    locale: "es",
    titleKey: "spanish"
  }],

  currentSite: function() {
    var defaultSiteJson = {
      "id": "klavado",
      "landingRouteName": "welcome.when-and-where",
      "displayName": "Klavado"
    };
    // below gives me the chance to have a different landing page for klavado.com
    // var siteJson = PreloadStore.get('currentSite') || defaultSiteJson;
    // if (siteJson) {
    //   return Site.create(siteJson);
    // } else {
    //   return Site.create({});
    // }
    return siteJson;
  }.property()
});
