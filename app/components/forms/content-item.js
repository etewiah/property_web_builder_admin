// This component is designed to handle the data used by 
// web-content model
// - works with content that has multilingual sections in the 
// form rawEs, rawEn etc
// - interface is summernote html editor
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
      this.set("contentValue", this.get("contentItem.raw" + this.get("languageSettings").capitalize()));
      this.set("isEditing", false);
    },
    previewContent: function(){
      debugger;
    }
  },


  contentValue: Ember.computed('contentItem', {
    get(key) {
      var capitalizedLang = this.get("languageSettings").capitalize();
        // return this.get("contentItem.rawEn");
        return this.get("contentItem.raw" + capitalizedLang);
      },
    set(key, value) {
      var capitalizedLang = this.get("languageSettings").capitalize();
      // this.set("contentItem.rawEn", value);
      this.set("contentItem.raw" + capitalizedLang, value);
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
      var capitalizedLang = this.get("languageSettings").capitalize();
      return "webContentLabels.suffix" + capitalizedLang;
    }
  })
});
