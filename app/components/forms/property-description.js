import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveContentItem: function() {
      this.sendAction("saveAction");
      // TODO - ensure above is successfull before calling below
      this.set("isEditing", false);
    },
    startEditing: function(){
      this.set("isEditing", true);
    },
    cancelEditing: function(){
      var propertyResource = this.get("propertyResource");
      propertyResource.rollbackAttributes();
      // debugger;
      this.set("descriptionValue", this.get("propertyResource." + this.languageSettings.descriptionFieldName));
      this.set("titleValue", this.get("propertyResource." + this.languageSettings.titleFieldName));
      this.set("isEditing", false);
    },
    previewContent: function(){
      debugger;
    }
  },
  descriptionValue: Ember.computed('propertyResource', {
    get(key) {
        return this.get("propertyResource." + this.languageSettings.descriptionFieldName);
      },
      set(key, value) {
        this.set("propertyResource." + this.languageSettings.descriptionFieldName, value);
        return value;
      }
  }),
  titleValue: Ember.computed('propertyResource', {
    get(key) {
        return this.get("propertyResource." + this.languageSettings.titleFieldName);
      },
      set(key, value) {
        this.set("propertyResource." + this.languageSettings.titleFieldName, value);
        return value;
      }
  })
});
