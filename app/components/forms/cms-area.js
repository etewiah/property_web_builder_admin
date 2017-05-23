// This component is based on the
// landing page 3-column services section
import Ember from 'ember';

export default Ember.Component.extend({
  // isEditing: true,
  actions: {
    // saveContentItem: function(contentItem) {
    //   // debugger;
    //   contentItem.save();
    // },
    startEditing: function() {
      this.set("isEditing", true);
    },
    cancelEditing: function() {
      // var contentItem = this.get("contentItem");
      // contentItem.rollbackAttributes();
      // this.set("contentValue", this.get("originalContentValue"));
      // debugger;
      this.set("isEditing", false);
    },
    previewContent: function() {}
  },
  // contentValue: Ember.computed('contentItem', {
  //   get(key) {
  //     debugger;

  //     return "mainText";
  //   },
  // }),
  // hasChanged: Ember.computed('', {
  //   get(key) {
  //     return true;
  //   }
  // }),
  labelSuffixKey: Ember.computed('contentItem', {
    get(key) {
      return "webContentLabels.suffix" + this.get("contentItem.locale").capitalize();
    }
  })
});
