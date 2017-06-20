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
      // var cmsPage = this.get("cmsPage");
      // cmsPage.rollbackAttributes();
      // this.set("contentValue", this.get("originalContentValue"));
      // debugger;
      this.set("isEditing", false);
    },
    previewContent: function() {}
  },

  labelSuffixKey: Ember.computed('cmsPage', {
    get(key) {
      // debugger;
      return "webContentLabels.suffix" + this.get("cmsPage.locale").capitalize();
    }
  })
});
