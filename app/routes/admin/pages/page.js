import Ember from 'ember';
import PwbPage from '../../../models/pwb_page';
const {
  Route,
  inject
} = Ember;

export default Ember.Route.extend({
  i18n: inject.service(),

  model(params) {
    var currentPwbPageMeta = PwbPage.get(params.pageName);
    // "about-us");
    // var cmsSections = this.modelFor("admin").setup.get('cmsSections');
    // var currentPwbPageMeta = cmsSections.findBy("tabValue", "about-us");
    return currentPwbPageMeta;
  },
  actions: {},
  setupController(controller, model) {
    var linkTitleKey = "link_title_" + this.get("i18n.locale");
    controller.set("currentPwbPageTitle", model[linkTitleKey]);
  }
});
