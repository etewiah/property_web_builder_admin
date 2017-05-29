import Ember from 'ember';
import AdminMeta from '../../../models/admin_meta';

export default Ember.Route.extend({
  model(params) {
    var currentPageMeta = AdminMeta.getCmsPageMeta(params.pageName);
    debugger;
      // "about-us");
    // var cmsSections = this.modelFor("admin").setup.get('cmsSections');
    // var currentPageMeta = cmsSections.findBy("tabValue", "about-us");
    return currentPageMeta;
  },
  actions: {},
});
