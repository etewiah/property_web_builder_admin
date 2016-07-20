import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],
  i18n: Ember.inject.service(),
  manageExtrasUrl: function(){
    return "/" + this.get("i18n.locale") + "/admin/properties/settings/extras";
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
    // extrasFields.chunk1 = inputFields.splice(0, Math.ceil(chunkLength));
    // extrasFields.chunk2 = inputFields.splice(0, Math.ceil(chunkLength));
    // extrasFields.chunk3 = inputFields.splice(0, Math.ceil(chunkLength));

    // extrasFields.chunk1 = [];
    // extrasFields.chunk2 = [];
    // extrasFields.chunk3 = [];

// debugger;
    return inputFields;
  }.property("extrasFieldsNames"),


  parseInputFields: function(fieldNames) {
    var inputFields = [];
    fieldNames.forEach(function(fieldNameKey) {
      // a fieldNameKey might be "extras.vistasALaSierra"
      var inputField = {
        fieldDbType: "boolean"
      };

      // var fnArray = fieldNameKey.split(".");
      // stripping out the "fieldLabels.extras." prefix - it gets in the way 
      // of ember set and get
      // inputField.fieldName = fnArray[ fnArray.length - 1 ];

      // replacing dots with underscores as they get in the way of ember set and get
      inputField.fieldName = fieldNameKey.replace(/\./g,"_");
      // inputField.labelTextTKey = fieldNameKey;
      inputField.labelText = this.get("i18n").t(fieldNameKey).string || "Unknown";
      // TODO - use something like below and logging to catch errors
      // if (inputField.labelText === "Unknown") {
      //   debugger;
      // }
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
