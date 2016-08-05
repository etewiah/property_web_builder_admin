import Ember from 'ember';
// import SiteTemplate from '../../../models/site-template';

export default Ember.Route.extend({
  // tabsList: [{}],
  i18n: Ember.inject.service(),
  actions: {
    // https://guides.emberjs.com/v1.10.0/routing/preventing-and-retrying-transitions/
    // below should stop users from navigating away from a page with outstanding changes
    // - does not work for social_media links on admin/website/general route though
    // because object being operated on there is not the model from this controller..
    willTransition: function(transition) {
        var contentResources = this.controller.get("model");
        // debugger;
        var hasDirtyRecords = false;
        contentResources.forEach(function(resource) {
          if (resource.get("hasDirtyAttributes")) {
            hasDirtyRecords = true;
          }
        });
        var i18n = this.get('i18n');
        // if (hasDirtyRecords &&
        //     !confirm("Are you sure you want to abandon progress?")) {
        if (hasDirtyRecords) {
          var message = i18n.t("alerts.navigatingFromChanges").toString();
          sweetAlert(message);
          transition.abort();
        } else {
          // Bubble the `willTransition` action so that
          // parent routes can decide whether or not to abort.
          return true;
        }
      }
  },


  model(params) {
    // var whitelabelPrefix = location.hostname.split(".")[1].toLowerCase() ;
    // var contentKey = whitelabelPrefix + "_" + params.pageName.toLowerCase();

    var contentKey = params.pageName;
    // .toLowerCase();
    this.set("contentKey", contentKey);
    return this.store.peekAll('webContent').filterBy("key", contentKey);
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {

    controller.set("model", model);
    controller.set("contentKey", this.get("contentKey"));

    // controller.set("agencyDetails", this.modelFor("admin").agencyDetails);
    // controller.set("tenantDetails", this.modelFor("admin").tenantDetails);
    // debugger;

    // var tabsWebsiteComponent = "tabs-website/" + activeTabName + "-tab";
    // controller.set("tabs-website-component", tabsWebsiteComponent);

    var supportedLanguages = this.modelFor("admin").tenantDetails.supported_languages || ["es"];
    controller.set("languages", supportedLanguages);


  }
});
