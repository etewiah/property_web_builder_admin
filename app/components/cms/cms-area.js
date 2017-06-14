// This component is based on the
// landing page 3-column services section
import Ember from 'ember';

export default Ember.Component.extend({
  // isEditing: true,
  actions: {
    updateCaches: function(updatedCaches) {
      this.sendAction("updateCachesAction", updatedCaches);
    },
    startEditing: function() {
      this.set("isEditing", true);
    },
    cancelEditing: function() {
      // var cmsPages = this.get("cmsPages");
      // cmsPages.rollbackAttributes();
      // this.set("contentValue", this.get("originalContentValue"));
      // debugger;
      this.set("isEditing", false);
    },
    previewContent: function() {}
  },

  labelSuffixKey: Ember.computed('cmsPages', {
    get(key) {
      return "webContentLabels.suffix" + this.get("cmsPages.locale").capitalize();
    }
  })
});
