import Ember from 'ember';
import CmsPage from "../../models/cms-page";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // languages: ["En", "Es"],
  // might have to order cmsPages by language...
  cmsPagesCollection: function() {
    var cmsPagesCollection = this.get("contentResources");
    var languages = this.get("languages");
    if (cmsPagesCollection.get("content").length < 1) {
      cmsPagesCollection = [];
      var store = this.get("store");
      languages.forEach(function(language) {
        var locale = language.split("-")[0];
        var newPage = store.createRecord("cmsPage", {
          slug: locale,
          // siteId: 1,
          // title: "title",
          blocks: [{
            content: "plhldr"
          }]
        });
        cmsPagesCollection.pushObject(newPage);
      })
    }
    return cmsPagesCollection;
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
