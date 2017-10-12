// This component is based on the
// landing page 3-column services section
import Ember from 'ember';

export default Ember.Component.extend({
  // isEditing: true,
  // currentLocaleFragment: function() {
  //   var currentLocaleFragment = this.get("pwbPage").getLocaleFragmentBlocks(this.get("locale"), this.get("currentPagePart.fragment_key"));
  //   if (!currentLocaleFragment) {
  //     currentLocaleFragment = {
  //       blocks: {}
  //     };
  //   }
  //   currentLocaleFragment.locale = this.get("locale");
  //   currentLocaleFragment.label = this.get("currentPagePart.fragment_key");
  //   return currentLocaleFragment;
  //   // return Ember.Object.create(currentLocaleFragment);
  // }.property("pwbPage", "activeTabName"),

  contentPhotos: function(){
    return this.get("pwbPage").getLocaleFragmentContentPhotos(this.get("currentPagePart.fragment_key")) || [];
  }.property("pwbPage", "activeTabName"),

  fragmentHtml: function(){
    var contentKey = "raw_" + this.get("locale");
    var raw = this.get("fragmentContent").content[contentKey] || "";
    // need to nest this in an object so I have an object.value
    // construct that can be updated by fragment-editor
    return { raw: raw};
  }.property("pwbPage", "activeTabName"),
  // setupComponent: function() {
  // }.on('didInsertElement'),


  actions: {
    updateCaches: function(updatedCaches) {
      this.sendAction("updateCachesAction", updatedCaches);
    },
    startEditing: function() {
      this.set("isEditing", true);
    },
    cancelEditing: function() {
      // var cmsPage = this.get("cmsPage");
      // cmsPage.rollbackAttributes();
      // this.set("contentValue", this.get("originalContentValue"));
      this.set("isEditing", false);
    },
    previewContent: function() {}
  },

  labelSuffixKey: Ember.computed('locale', {
    get(key) {
      return "webContentLabels.suffix" + this.get("locale").capitalize();
    }
  })
});
