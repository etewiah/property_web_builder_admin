import Ember from 'ember';


export default Ember.Component.extend({
  changedFields: [],
  fieldsWithErrors: [],

  // can't think of a simpler way of doing this
  // but will watch below in each child input field and reset
  // as not edited when resetTrigger goes up
  resetTrigger: 0,
  actions: {
    checkDirtyState: function(changedFieldInfo) {
      debugger;
      var changedFields = this.get("changedFields");
      var fieldsWithErrors = this.get("fieldsWithErrors");

      if (changedFieldInfo.hasErrors) {
        fieldsWithErrors.pushObject(changedFieldInfo.fieldName);
      } else {
        fieldsWithErrors.removeObject(changedFieldInfo.fieldName);
      }
      var hasErrors = (fieldsWithErrors.length > 0);
      this.set("hasErrors", hasErrors);

      if (changedFieldInfo.hasChanged) {
        changedFields.pushObject(changedFieldInfo.fieldName);
      } else {
        changedFields.removeObject(changedFieldInfo.fieldName);
      }
      // if we have more than one field that has changed
      // consider this component as "hasChanged"
      var hasChanged = (changedFields.length > 0);
      this.set("hasChanged", hasChanged);
    },
    triggerReset: function() {
      this.set("changedFields", []);
      this.set("hasChanged", false);
      this.set("fieldsWithErrors", []);
      this.set("hasErrors", false);
      this.set("resetTrigger", this.get("resetTrigger") + 1);
    }
  },



});
