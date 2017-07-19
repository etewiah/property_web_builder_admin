// components like extras-tab etc inherit from this to have the functionality
// to have save button only appear when changes have been made

// components that make use of this have to observe resetTrigger to know when changes have been saved or canceled
// - all components on a page that make use of this also have to share the same resourceObject
// - and use checkDirtyState as action for when value changes

// bull: save button will need to be wrapped in "if hasChanged"
// bull: and save action will have to call "self.send("triggerReset")" on success

import Ember from 'ember';


export default Ember.Component.extend({
  // turns out setting changedFields here causes it to be shared by all that 
  // inherit from this which was causing problems
  // so it is now set in components that inherit from this
  // changedFields: [],
  // or for properties, here:
  // /sites-2015-spt/inmo1-client/app/routes/admin/propiedades/editar/tab.js
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
        // changedFields needs to be declared on form that inherits from this
        var existingObjectInArray = changedFields.findBy("fieldName", changedFieldInfo.fieldName);
        if (!existingObjectInArray) {
          changedFields.addObject(changedFieldInfo);
        }
        // unlike pushObject, above addObject should only add object if it does not already exist
        // but it does not recognise the same object a second time...
      } else {
        var objectToRemove = changedFields.findBy("fieldName", changedFieldInfo.fieldName);
        changedFields.removeObject(objectToRemove);
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
    },
    // TODO - ensure below is being used correctly
    saveResourceObject: function() {
      var resourceObject = this.get("resourceObject");
      var self = this;

      function success(result) {
        // triggerReset is an action in TabWithForm
        self.send("triggerReset");
      }

      function failure(reason) {
        // handle the error
        // var errorMessage = "Sorry, there has been an error.";
        // if (error.responseJSON && error.responseJSON.errors) {
        //   errorMessage = error.responseJSON.errors[0];
        // }
        // this.set('serverError', errorMessage);
      }
      if (typeof resourceObject.store === "object") {
        // for propertyResource which uses ember data:
        resourceObject.save().then(success).catch(failure);
      } else {
        resourceObject.save(success, failure);
      }
    },
    cancelExtrasChanges: function(resourceToRollback) {
      // var ca = resourceToRollback.changedAttributes();
      resourceToRollback.rollbackAttributes();
      var changedFields = this.get("changedFields");
      changedFields.forEach(function(field) {
        this.set("propertyResource.extras." + field.fieldName, field.originalValue);
      }.bind(this));

      this.send("triggerReset");
    },
    cancelChanges: function() {
      var resourceObject = this.get("resourceObject");
      if (typeof resourceObject.rollbackAttributes === "function") {
        // for propertyResource which uses ember data:
        resourceObject.rollbackAttributes();
      } else {
        var changedFields = this.get("changedFields");
        changedFields.forEach(function(field) {
          this.set("resourceObject." + field.fieldName, field.originalValue);
        }.bind(this));
      }
      this.send("triggerReset");
      // this.rerender();
      // this.sendAction("refetchDataAction");
    }
  },



});
