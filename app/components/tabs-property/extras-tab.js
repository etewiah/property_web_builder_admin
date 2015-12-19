import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],
  i18n: Ember.inject.service(),
  manageExtrasUrl: function(){
    return "/" + this.get("i18n.locale") + "/admin/translations/extras";
  }.property(),
// export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  extrasInputFields1: function() {
    var extrasFields = {};
    var fieldNames = this.get("fieldKeys.extras") || [];
    // this.get("extrasFieldsNames") || [];
    var inputFields = this.parseInputFields(fieldNames);
    inputFields =  inputFields.sortBy("labelText");
    var chunkLength = fieldNames.length / 3;
    // extrasFields.chunk1 = this.parseInputFields(fieldNames.splice(0, Math.ceil(chunkLength)));
    // extrasFields.chunk2 = this.parseInputFields(fieldNames.splice(0, Math.ceil(chunkLength)));
    // extrasFields.chunk3 = this.parseInputFields(fieldNames);
    extrasFields.chunk1 = inputFields.splice(0, Math.ceil(chunkLength));
    extrasFields.chunk2 = inputFields.splice(0, Math.ceil(chunkLength));
    extrasFields.chunk3 = inputFields.splice(0, Math.ceil(chunkLength));

    return extrasFields;
  }.property("extrasFieldsNames"),


  parseInputFields: function(fieldNames) {
    var inputFields = [];
    fieldNames.forEach(function(fieldName) {
      var inputField = {
        fieldDbType: "boolean"
      };

      var fieldNameArray = fieldName.split(".");
      // stripping out the "fieldLabels.extras." prefix - it gets in the way 
      // of ember set and get
      inputField.fieldName = fieldNameArray[ fieldNameArray.length - 1 ];

      // inputField.labelTextTKey = fieldName;
      inputField.labelText = this.get("i18n").t(fieldName).string || "Unknown";
      inputFields.push(inputField);
    }.bind(this));
    return inputFields;
  },


  actions: {
    saveExtrasObject: function() {

      var propertyResource = this.get("propertyResource");
      var self = this;

      propertyResource.updateExtras(function(success){
        // triggerReset is an action in TabWithForm
        self.send("triggerReset");
      });
      // .then(transitionToPost).catch(failure);
    }
  },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "extras";
  }.property("activeTabName"),


});
