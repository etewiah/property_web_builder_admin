import Ember from 'ember';

export default Ember.Route.extend({
  // tabsList: [{}],
  actions: {
    willTransition: function(transition) {
      var contentResources = this.controller.get("contentResources");
      var hasDirtyRecords = false;
      contentResources.forEach(function(resource){
        if (resource.get("hasDirtyAttributes")) {
          hasDirtyRecords = true;
        }
      });
      if (hasDirtyRecords &&
          !confirm("Are you sure you want to abandon progress?")) {
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
  model(params) {
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
    var activeTabName = this.paramsFor('admin.content.tab').tabName || "";
    controller.set("activeTabName", activeTabName.toLowerCase());
    // controller.set("contentResources", this.modelFor('admin.content'));
    controller.set("contentResources", model);
    var tabsWebsiteComponent = "tabs-website/" + activeTabName + "-tab";

    controller.set("tabs-website-component", tabsWebsiteComponent);

    // TODO - get below from server:
    controller.set("languages", ["En","Es"]);

    controller.set("tabsList", [{
        tabValue: "home",
        tabTitleKey: "webContentSections.home"
      }, {
        tabValue: "about-us",
        tabTitleKey: "webContentSections.aboutUs"
      }, {
        tabValue: "legal",
        tabTitleKey: "webContentSections.legal"
      }

      // {
      //       tabValue: "tag-line",
      //       tabTitleKey: "webContentSections.tagLine"
      //     }, {
      //       tabValue: "sell",
      //       tabTitleKey: "webContentSections.sell"
      //     },


    ]);
  }
});
