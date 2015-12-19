// components like extras-tab etc inherit from this to have the functionality
// to have save button only appear when changes have been made

// save button will need to be wrapped in "if hasChanged"
// and save action will have to call "self.send("triggerReset")" on success

import Ember from 'ember';


export default Ember.Component.extend({
  changedFields: [],
  fieldsWithErrors: [],

  // can't think of a simpler way of doing this
  // but will watch below in each child input field and reset
  // as not edited when resetTrigger goes up
  resetTrigger: 0,
  actions: {
    // I pass this action to form fields to be called as the 
    // valueChangedAction - for when value changes..
    checkDirtyState: function(changedFieldInfo) {
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
        changedFields.pushObject(changedFieldInfo);
      } else {
        var objectToRemove = changedFields.findBy("fieldName", changedFieldInfo.fieldName);
        changedFields.removeObject(objectToRemove);
      }
      // if we have more than one field that has changed
      // consider this component as "hasChanged"
      var hasChanged = (changedFields.length > 0);
      this.set("hasChanged", hasChanged);
      debugger;
    },
    triggerReset: function() {
      this.set("changedFields", []);
      this.set("hasChanged", false);
      this.set("fieldsWithErrors", []);
      this.set("hasErrors", false);
      this.set("resetTrigger", this.get("resetTrigger") + 1);
      debugger;
    },
    savePropertyResource: function() {
      var propertyResource = this.get("resourceObject");
      var self = this;

      function success(result) {
        // triggerReset is an action in TabWithForm
        self.send("triggerReset");
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }
      debugger;
      propertyResource.save().then(success).catch(failure);
    },
    cancelExtrasChanges: function(resourceToRollback, originalExtras) {
      // var ca = resourceToRollback.changedAttributes();
      resourceToRollback.rollbackAttributes();
      var changedFields = this.get("changedFields");
      changedFields.forEach(function(field) {
        this.set("propertyResource.extras." + field.fieldName, field.originalValue);
      }.bind(this));

      this.send("triggerReset");
    },
    cancelChanges: function(resourceToRollback) {
      // var propertyResource = this.get("resourceObject");
      resourceToRollback.rollbackAttributes();
      this.send("triggerReset");
      // this.rerender();
      // this.sendAction("refetchDataAction");
    }
  },



});
