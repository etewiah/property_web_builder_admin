import Ember from 'ember';
import AdminMeta from '../models/admin_meta';
const {
  Route, inject
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


  model(params) {
    var adminMeta = AdminMeta.get(this.paramsFor('admin.propiedades.editar').idPropiedad);
    // TODO - stop passing in dummy param above
    // adminMeta is from http://localhost:3000/api/v1/lang/field_keys/
    // and just returns a list of selectValues for provinces and propertyTypes..

    return adminMeta;
  },

  setupController(controller, model) {
    controller.set("fieldKeys", model.selectValues);
    controller.set("leftNavItems", [{
        tabIconClass: "fa fa-home",
        tabTitle: "Inicio",
        tabRoute: "admin.inicio"
      }, {
        tabIconClass: "fa fa-desktop",
        tabTitle: "Content",
        tabRoute: "admin.content"
      }, {
        tabIconClass: "fa fa-language",
        tabTitle: "Translations",
        tabRoute: "admin.translations"
      },
      {
        tabIconClass: "fa fa-building-o",
        tabTitle: "Propiedades",
        tabRoute: "admin.propiedades"
      }, {
        tabIconClass: "fa fa-users",
        tabTitle: "Clientes",
        tabRoute: "admin.default"

      },

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

      // }, {
      //   tabIconClass: "fa fa-user",
      //   tabTitle: "Mi perfil",
      //   tabRoute: "admin.default"
      // }, {
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
