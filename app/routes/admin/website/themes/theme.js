import Ember from 'ember';
import Theme from '../../../../models/theme';

export default Ember.Route.extend({
  // tabsList: [{}],
  // i18n: Ember.inject.service(),

  model(params) {
    return Theme.getAll();
  },

  setupController(controller, model) {
    var themeInViewId = this.paramsFor('admin.website.themes.theme').themeName || "";

    themeInViewId = themeInViewId.toLowerCase();
    controller.set("themeInViewId", themeInViewId);

    controller.set("model", model);
    var themeInView = model.findBy("id", themeInViewId);
     // || websiteSectionsTabsList[0];
    controller.set("themeInView", themeInView);

    var websiteDetails = this.modelFor("admin").websiteDetails;
    controller.set("websiteDetails", websiteDetails);

  }
});
