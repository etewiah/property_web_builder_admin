import Ember from 'ember';
import CmsPage from "../../models/cms-page";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  i18n: Ember.inject.service(),
  // shortLocaleCodes: ["En", "Es"],
  // might have to order cmsPages by locale...
  // and filter out unsupported shortLocaleCodes
  filteredCmsPages: function() {
    var cmsPages = this.get("contentResources");
    // above is ember data coll which can be accessed so:
    // cmsPages.get("content")[0].record.get("slug")
    // cmsPages.get("content.firstObject.record.slug")
    var shortLocaleCodes = this.get("shortLocaleCodes");
    var filteredCmsPages = [];
    // var locales = this.get("i18n.locales");
    var store = this.get("store");
    // var cmsPartInfo = this.get("cmsPartInfo");
    if (cmsPages.get("content").length > 0) {
      // below filters out shortLocaleCodes that are not enabled for site:
      shortLocaleCodes.forEach(function(locale) {
        // var locale = locale.split("-")[0];
        var localePP = cmsPages.findBy("slug", locale);
        if (!!!localePP) {
          // where a locale has not been prepopulated, 
          // I'll create new record for it here
          var siteId = cmsPages.get("content.firstObject.record.siteId");
          var layoutId = cmsPages.get("content.firstObject.record.layoutId");
          var parentId = cmsPages.get("content.firstObject.record.parentId");
          var label = cmsPages.get("content.firstObject.record.label");
          localePP = store.createRecord("cmsPage", {
            slug: locale,
            siteId: siteId,
            site_id: siteId,
            label: label,
            layoutId: layoutId,
            parentId: parentId,
            blocks: []
          });
          // debugger;
        }
        filteredCmsPages.pushObject(localePP);
      });
    } else {
      // // in case pagePart has no content, I will go ahead and create 
      // // records here
      // shortLocaleCodes.forEach(function(locale) {
      //   var newPage = store.createRecord("cmsPage", {
      //     slug: locale,
      //     blocks: [{
      //       content: "plhldr"
      //     }]
      //   });
      //   filteredCmsPages.pushObject(newPage);
      // })
    }
    return filteredCmsPages;
  }.property("contentResources"),
  actions: {
    updateCaches: function(updatedCaches) {
      var cmsPages = this.get("contentResources.content");
      // Where blocks contain images,
      // this refreshs contentCache for all locales
      // because changing image in 1 locale results in an update for all locales
      updatedCaches.forEach(function(updatedCache) {
        var cmsPage = cmsPages.findBy("id", updatedCache.page_id.toString());
        if (cmsPage) {
          var cmsPageRecord = cmsPage.getRecord();
          cmsPageRecord.set("contentCache", updatedCache.page_content_cache);
        }
      });

    },

  }

});
