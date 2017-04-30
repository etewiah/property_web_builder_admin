import Ember from 'ember';
//apr 2017 TODO - remove - no longer in use

export default Ember.Component.extend({
  // actions: {
  //   changeSections: function(field) {
  //     var sections = this.get("sections");
  //     var changedSection = sections.findBy("linkKey", field.fieldName);
  //     changedSection.set("visible", !changedSection.get("visible"));
  //     this.sendAction("valueChangedAction", changedSection);
  //   }
  // },
  // sectionFields: function() {
  //   var sections = this.get("sections");
  //   var sectionFields = [];
  //   sections.forEach(function(section) {
  //     var field = {
  //       labelTextTKey: "navbar." + section.get("linkKey"),
  //       fieldName: section.get("linkKey")
  //     }
  //     sectionFields.push(field);
  //   });
  //   return sectionFields;
  // }.property(),
  // sectionOptions: function() {
  //   var sections = this.get("sections");
  //   var sectionOptions = {};
  //   sections.forEach(function(section) {
  //     sectionOptions[section.get("linkKey")] = section.get("visible");
  //   });
  //   return sectionOptions;
  // }.property(),

});
