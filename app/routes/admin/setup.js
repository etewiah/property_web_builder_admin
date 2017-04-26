import Ember from 'ember';
import Agency from '../../models/agency';

export default Ember.Route.extend({
  // i18n: Ember.inject.service(),
  translationsFetcher: Ember.inject.service(),

  afterModel: function() {
    var token = Cookies.get('pwb_version');
    if (!token) {
      this.get("translationsFetcher").checkForUpdates(location);
      Cookies.set("pwb_version", "0.1.1");
    }
  },

  model(params) {
    // var i18n = this.get('i18n');
    var lang_code = this.paramsFor("admin").locale || "es";
    return this.store.query("info", {
      filter: {
        key: "welcome",
        lang_code: lang_code
      }
    });
    // return this.store.findAll('webContent'); 
    // return params.tabName;
    // return this.store.findRecord('webContent', "test");
  },


  setupController(controller, model) {
    controller.set("agency", this.modelFor("admin").agencyDetails);
    var menuCards = [{
      titleKey: "cards.website",
      promptKey: "cards.websitePrompt",
      linkParams: "",
      link: "admin.website",
      linkKey: "cards.websiteLink",
      tasks: [{
        titleKey: "tasks.changeLogo",
        promptKey: "tasks.changeLogoPrompt",
        // linkParams: {"tabName": "general"},
        // above will result in route model not getting called
        linkParams: "appearance",
        link: "admin.website.settings.tab",
        icon: "fa fa-desktop fa-2x"
      }, {
        titleKey: "tasks.manageLandingCarousel",
        linkParams: "landing-carousel",
        link: "admin.website.content.tab",
        icon: "fa fa-desktop fa-2x"
      }, {
        titleKey: "tasks.changeAboutUsText",
        linkParams: "about-us",
        link: "admin.website.content.tab",
        icon: "fa fa-desktop fa-2x"
      }, {
        titleKey: "tasks.changeLegalText",
        linkParams: "legal",
        link: "admin.website.content.tab",
        icon: "fa fa-desktop fa-2x"
      }]
    }, {
      titleKey: "cards.properties",
      promptKey: "cards.propertiesPrompt",
      linkParams: "",
      link: "admin.propiedades",
      linkKey: "cards.propertiesLink",
      tasks: [{
        titleKey: "tasks.addProperty",
        // promptKey: "tasks.addPropertyPrompt",
        link: "admin.propiedades.nuevo",
        icon: "fa fa-building-o fa-2x"
      }, {
        titleKey: "tasks.manageProperties",
        // linkParams: null,
        link: "admin.propiedades.default",
        icon: "fa fa-building-o fa-2x"
      }, {
        titleKey: "tasks.managePropertyExtras",
        linkParams: "extras",
        link: "admin.propiedades.settings.tab",
        icon: "fa fa-building-o fa-2x"
      }, {
        titleKey: "tasks.managePropertyTypes",
        linkParams: "property-types",
        link: "admin.propiedades.settings.tab",
        icon: "fa fa-building-o fa-2x"
      }]
    }];
    controller.set("menuCards", menuCards);
    controller.set("info", model);
    // var defaultTodoList = [
    //   {title: "Create some content..."}
    // ];
    // controller.set("content", defaultTodoList);
  }
});
