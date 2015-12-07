import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveContentItem: function(contentItem) {
      this.sendAction("saveContentItemAction", contentItem);
    },
    startEditing: function(){
      this.set("isEditing", true);
    },
    cancelEditing: function(){
      this.set("isEditing", false);
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
