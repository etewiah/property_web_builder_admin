import Ember from 'ember';
import AdminMeta from '../../../models/admin_meta';
const {
  Route,
  inject
} = Ember;

export default Ember.Route.extend({
  i18n: inject.service(),

  model(params) {
    var currentPageMeta = AdminMeta.getCmsPageMeta(params.pageName);
    // "about-us");
    // var cmsSections = this.modelFor("admin").setup.get('cmsSections');
    // var currentPageMeta = cmsSections.findBy("tabValue", "about-us");
    return currentPageMeta;
  },
  actions: {},
  setupController(controller, model) {
    var linkTitleKey = "link_title_" + this.get("i18n.locale");
    controller.set("currentPageTitle", model[linkTitleKey]);
  }
});
