import Ember from 'ember';
import Theme from '../../../../models/theme';
// path is actually /admin/website

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
      // editProperty(property) {
      //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
      // }
  },

  // serialize: function (model) {
  //   debugger;
  //   return { claim_id: model.get('cla_seq'), claim_sub: model.get('cla_sub') };
  // },

  model(params) {
    if (params.tabName === "sections") {
      return this.store.findAll("section");
    }
    if (params.tabName === "appearance") {
      return Theme.getAll();
      // july 2016: tried using ember store below but just too much
      // work figuring out the promise object
      // return this.store.findAll("siteTemplate").then(
      //   function(res){
      //     // debugger;
      //     return res;
      //   });
    }
    return this.store.query("webContent", {
      filter: {
        tag: params.tabName
      }
    });
    // return this.store.findAll('webContent'); 
    // return params.tabName;
    // return this.store.findRecord('webContent', "test");
  },
  // setupController will not get called if model does not change
  // eg if I returned a query that was not dependant on params....
  setupController(controller, model) {
    var activeTabName = this.paramsFor('admin.website.settings.tab').tabName || "";
    activeTabName = activeTabName.toLowerCase();
    controller.set("activeTabName", activeTabName);

    controller.set("model", model);

    var agencyDetails = this.modelFor("admin").agencyDetails;
    controller.set("agencyDetails", agencyDetails);

    //TODO - replace tenantDetails with agencyDetails in child components and remove below...
    // controller.set("tenantDetails", agencyDetails);
    // controller.set("primaryAddress", this.modelFor("admin").primaryAddress);
    // controller.set("currentUser", this.modelFor("admin").currentUser);


    // before I would render all the components for the different tabs
    // and hide or show them depending on which was active
    // This meant initialization hooks which needed a dom element would fail
    var tabsWebsiteComponent = "tabs-website/" + activeTabName + "-tab";
    controller.set("tabs-website-component", tabsWebsiteComponent);

    var supportedLanguages = agencyDetails.supported_locales || ["es"];
    controller.set("languages", supportedLanguages);

    var websiteSettingsTabsList = this.modelFor("admin").setup.get('websiteSettingsTabsList');
    controller.set("tabsList",websiteSettingsTabsList);


  }
});
