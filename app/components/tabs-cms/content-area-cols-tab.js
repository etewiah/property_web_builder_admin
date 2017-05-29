import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // languages: ["En", "Es"],
  // might have to order cmsPages by language...
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
