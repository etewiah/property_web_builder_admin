import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  i18n: Ember.inject.service(),

  fragmentContent: function() {
    var pageFragmentLabel = this.get("activeTabName");
     // this.get("currentPagePart.page_part_key");
    var fragmentContent = this.get("currentPwbPage").getFragmentContent(pageFragmentLabel);
    return fragmentContent;
  }.property("currentPwbPage","currentPagePart.page_part_key"),
  toggleVisField: function() {
    var toggleVisField = {
      labelText: "Visible on page",
      fieldName: "visibleOnPage"
    };
    var pageFragmentLabel = this.get("currentPagePart.page_part_key");
    // var visiblePageParts = this.get("currentPwbPage.visible_page_parts") || [];
    // var pagePartVisibility = visiblePageParts.includes(pageFragmentLabel);
    var fragmentContent = this.get("currentPwbPage").getFragmentContent(pageFragmentLabel);
    toggleVisField.toggleValue = fragmentContent.visible_on_page;
    return toggleVisField;
  }.property("currentPagePart.page_part_key"),
  actions: {
    changeVisibility: function(newVal) {
      var currentPwbPage = this.get("currentPwbPage");
      var pageFragmentLabel = this.get("currentPagePart.page_part_key");
      // var visiblePageParts = this.get("currentPwbPage.visible_page_parts") || [];
      var cmd = "setAsHidden";
      if (newVal) {
        cmd = "setAsVisible";
        // visiblePageParts.pushObject(pageFragmentLabel);
      } 
      var self = this;
      function success(result) {}
      function failure(reason) {
        // handle the error
      }
      currentPwbPage.setPagePartVisibility(pageFragmentLabel, cmd, success, failure);
    },
    // TODO - handle setting images
    // updateCaches: function(updatedCaches) {
    //   var cmsPages = this.get("contentResources.content");
    //   // Where blocks contain images,
    //   // this refreshs contentCache for all locales
    //   // because changing image in 1 locale results in an update for all locales
    //   updatedCaches.forEach(function(updatedCache) {
    //     var cmsPage = cmsPages.findBy("id", updatedCache.page_id.toString());
    //     if (cmsPage) {
    //       var cmsPageRecord = cmsPage.getRecord();
    //       cmsPageRecord.set("contentCache", updatedCache.page_content_cache);
    //     }
    //   });
    // },

  }

});
