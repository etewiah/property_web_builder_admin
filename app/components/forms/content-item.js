// This component is designed to handle the data used by 
// web-content model
import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveContentItem: function(contentItem) {
      this.sendAction("saveContentItemAction", contentItem);
      // TODO - ensure above is successfull before calling below
      this.set("isEditing", false);
    },
    startEditing: function(){
      this.set("isEditing", true);
    },
    cancelEditing: function(){
      var contentItem = this.get("contentItem");
      contentItem.rollbackAttributes();
      // debugger;
      this.set("contentValue", this.get("contentItem.raw" + this.languageSettings));
      this.set("isEditing", false);
    },
    previewContent: function(){
      debugger;
    }
  },


  contentValue: Ember.computed('contentItem', {
    get(key) {
        // return this.get("contentItem.rawEn");
        return this.get("contentItem.raw" + this.languageSettings);
      },
    set(key, value) {
      // this.set("contentItem.rawEn", value);
      this.set("contentItem.raw" + this.languageSettings, value);
      return value;
    }
  }),
  hasChanged: Ember.computed('', {
    get(key) {
        return true;
      }
  }),
  labelSuffixKey: Ember.computed('contentItem', {
    get(key) {
      return "webContentLabels.suffix" + this.get("languageSettings");
    }
  })
});
