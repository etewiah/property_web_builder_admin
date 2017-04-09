import Ember from 'ember';
import Agency from '../models/agency';
const {
  Route,
  inject
} = Ember;

export default Ember.Route.extend({

  translationsFetcher: inject.service(),
  i18n: inject.service(),

  beforeModel: function(transition) {
    var localeToUse = transition.params.admin.locale;
    var i18n = this.get('i18n');
    if (i18n.get("locales").contains(localeToUse)) {
      // if the locale param passed in is valid, lets set and use that
      i18n.set("locale", localeToUse);
    } else {
      // else lets just use the default
      // TODO - set url to reflect default locale
      localeToUse = i18n.get("locale");
    }
    return this.get('translationsFetcher').fetch(localeToUse);
  },


  model() {
    var agencyDetails = Agency.get();
    return agencyDetails;
  },


  setupController(controller, model) {
    // controller.set("agencyDetails", model.agency);
    controller.set("leftNavItems", [{
        tabIconClass: "fa fa-home",
        tabTitleKey: "adminSections.start",
        tabRoute: "admin.setup"
          // tabRoute: "admin.inicio"
      }, {
        tabIconClass: "fa fa-building-o",
        tabTitleKey: "adminSections.properties",
        tabRoute: "admin.propiedades",
        subMenuItems: [{
          tabIconClass: "fa fa-list",
          tabTitleKey: "adminSections.list",
          tabRoute: "admin.propiedades.list.default"
            // tabRoute: "admin.inicio"
        }, {
          tabIconClass: "fa fa-tags",
          tabTitleKey: "adminSections.labels",
          tabRoute: "admin.propiedades.settings"
        }, {
          tabIconClass: "fa fa-plus",
          tabTitleKey: "newProperty",
          tabRoute: "admin.propiedades.nuevo"
            // tabRoute: "admin.inicio"
        }, ]
      },
      //  {
      //   tabIconClass: "fa fa-users",
      //   tabTitleKey: "adminSections.clientes",
      //   tabRoute: "admin.clients"
      // },
      {
        tabIconClass: "fa fa-desktop",
        tabTitleKey: "adminSections.content",
        tabRoute: "admin.website",
        subMenuItems: [{
          tabIconClass: "fa fa-gear",
          tabTitleKey: "adminSections.websiteSettings",
          tabRoute: "admin.website.settings"
        }, {
          tabIconClass: "fa fa-newspaper-o",
          tabTitleKey: "adminSections.websiteContent",
          tabRoute: "admin.website.content"
        }]
      }, {
        tabIconClass: "fa fa-exchange",
        tabTitleKey: "adminSections.import",
        tabRoute: "admin.io"
      }, {
        tabIconClass: "fa fa-user",
        tabTitleKey: "adminSections.agencyDetails",
        tabRoute: "admin.agency"
      }, {
        tabIconClass: "fa fa-info-circle",
        tabTitleKey: "adminSections.about",
        tabRoute: "admin.about"
      },
      // {
      //   tabIconClass: "fa fa-language",
      //   tabTitleKey: "adminSections.translations",
      //   tabRoute: "admin.translations"
      // },


      // {
      //   tabIconClass: "fa fa-calendar",
      //   tabTitle: "Actividades",
      //   tabRoute: "admin.default"

      // }, {
      //   tabIconClass: "fa fa-building-o",
      //   tabTitle: "Propiedades",
      //   tabRoute: "admin.propiedades"
      // }, {
      //   tabIconClass: "fa fa-users",
      //   tabTitle: "Clientes",
      //   tabRoute: "admin.default"

      // }, {
      //   tabIconClass: "fa fa-calendar",
      //   tabTitle: "Actividades",
      //   tabRoute: "admin.default"

      // },  {
      //   tabIconClass: "fa fa-support",
      //   tabTitle: "Soporte",
      //   tabRoute: "admin.default"
      // }, 
      // {
      //   tabIconClass: "fa fa-sign-out",
      //   tabTitle: "Salir",
      //   tabRoute: "admin.default"
      // }

    ]);
  }
});
