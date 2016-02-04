import Ember from 'ember';

// currently use this object to display language choices in application.hbs
// {{#each configObject.locales as |localeConfig|}}


export default Ember.Service.extend({
  // If I switch above to Ember.Object I get a console warning about a deprecation
  // that can be fixed by setting isServiceFactory to true but below does not work:
  // isServiceFactory: true,
  

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
    return defaultSiteJson;
  }.property()
});
